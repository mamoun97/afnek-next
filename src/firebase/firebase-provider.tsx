
'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut

} from 'firebase/auth';
import { auth } from '@/firebase/config';
import { AuthApi } from '@/api/auth';
import { ProfileApi } from '@/api/profile';
import alertError from '@/utils/alertError';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { changeUser } from '@/store/authSlice';

interface AuthContextValue {
  user: User | null;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
  isLoading:boolean,
  signWithEmailAndPassword: (email:string,password:string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading:false,
  googleSignIn: async () => { },
  logOut: async () => { },
  signWithEmailAndPassword:async () => { },
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const user=useSelector<RootState>(state=>state.user)as User
  const dispatch=useDispatch<AppDispatch>()
  const setUser=(e:User|null)=>dispatch(changeUser(e))
  // const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const googleSignIn = async () => {
    setIsLoading(true)
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alertError(err)
    }
  };
  const signWithEmailAndPassword = async (username:string,password:string) => {
    setIsLoading(true)
    try {
      const d=await AuthApi.sginInWithEmailAndPass({username,password})
      localStorage.setItem("token", d.token)
      getUserInfo();
    } catch (err) {
      setIsLoading(false)
      alertError(err)
    }
  };

  const logOut = async () => {
    try {
      localStorage.setItem("token", "")
      setUser(null)
      await signOut(auth);
    } catch (err) {
      alertError(err)
    }
  };
  const getUserInfo = async () => {
    let d = await ProfileApi.getUserInfo()
    setUser(d)
    setIsLoading(false)
    router.push("/")

  }
  const getToken = (token: string) => {
    if(!!token)return
    setIsLoading(true)
    AuthApi.sginInWithIdentities(token).then(res => {
      localStorage.setItem("token", res.token)
      getUserInfo();
      
    }).catch(err => {
      alertError(err)
      setIsLoading(false)
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setIsLoading(false)
      if (!!currentUser?.accessToken)
        getToken(currentUser.accessToken ?? "")
    });

    return unsubscribe;
  }, []);


  return (
    <AuthContext.Provider value={{ user,isLoading, googleSignIn, logOut,signWithEmailAndPassword }}>

      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
