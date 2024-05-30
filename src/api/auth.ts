import ApiConfig, { http } from "./config";




const sginInWithEmailAndPass = async (dt: { username: string, password: string }): Promise<{token:string}> => {
    const { data } = await http().post(ApiConfig.signIn, dt);
    return data
}
const sginInWithIdentities = async (token: string): Promise<{token:string}> => {
    const { data } = await http().get(ApiConfig.identities);
    return data
}

export const AuthApi={
    sginInWithEmailAndPass,
    sginInWithIdentities
}