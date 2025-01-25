
"use client"
import { IoIosMail } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Body from '@/components/Body';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Image from 'next/image';
import images from '@/assets';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserAuth } from '@/firebase/firebase-provider';
import { useRouter } from 'next/navigation';
import { Button, Input } from "rizzui";
import useLang from "@/lang/useLang";


export default function Login() {
  const {t}=useLang()
  const { googleSignIn, user, isLoading,signWithEmailAndPassword } = UserAuth();
  const [email, setEmail] = useState("bilalfali60@gmail.com")
  const { push } = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      push("/")
    } catch (_) {
      
    }
  };
  const handleSignWithEmailAndPassword = async (email:string,password:string) => {
    try {
      await signWithEmailAndPassword(email,password);
     
    } catch (_) {
      
    }
  };
  
  const handelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleSignWithEmailAndPassword(email, "123456789")
  }
  return (
    <Body>
      <Header />
      <Container className="mt-8 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 bg-white rounded-xl">
          <div className='col-span-1 max-md:hidden'>
            <Image src={images.login_image} className='w-full' alt="" loading="lazy" />
          </div>
          <div className='col-span-1 flex justify-center items-center px-4 py-8'>
            <div className=' w-full max-w-sm'>
              <h1 className='text-2xl font-bold'>{t.login.login_or_create}</h1>
              <p className=' text-gray-500 mt-2'>
              {t.login.contact_details}
              </p>
              <form className="flex flex-col gap-4 mt-4" onSubmit={handelSubmit}>
                <div>
                  
                  <Input 
                  prefix={<IoIosMail className="w-4 h-4"/>}
                    value={email}
                    id="email1" type="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    placeholder={t.login.email_ph}
                    label={t.login.email}
                    required />
                </div>


                {/* <Link href="/welcome-hotel" className='w-full'>
                  <Button type="submit" color='blue' className='w-full' >Continue with email address</Button>
                </Link> */}

                <Button isLoading={isLoading} type="submit" color='primary' className='w-full' >{t.login.continue_with_email}</Button>

              </form>
              <div className="flex items-center mt-5 mb-5">
                <div className="grow border-y border-gray-200"></div>
                <div className="me-2"></div>
                <span className='text-gray-400 text-sm'>{t.login.or_register_with}</span>
                <div className="me-2"></div>
                <div className="grow border-y border-gray-200"></div>
              </div>

              <Button type="submit" onClick={handleGoogleSignIn}
                color='secondary' className='w-full text-foreground'>
                <FcGoogle className="text-xl me-2" /> {t.login.sign_in_google}
              </Button>

              <p className='text-center text-sm text-gray-800 mt-6'>
              {t.login.terms_agreement}
                <Link href="#" className='ps-1 text-blue-600 font-semibold'> {t.login.terms_of_service}</Link>
              </p>

            </div>
          </div>
        </div>
      </Container>
    </Body>
  )
}
