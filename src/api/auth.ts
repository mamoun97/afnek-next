import ApiConfig, { http } from "./config";




const sginInWithEmailAndPass = async (dt: { email: string, password: string }): Promise<any> => {
    const { data } = await http().post(ApiConfig.signIn, dt);
    return data
}
const sginInWithIdentities = async (token: string): Promise<any> => {
    const { data } = await http().post(ApiConfig.identities, { token });
    return data
}

export const AuthApi={
    sginInWithEmailAndPass,
    sginInWithIdentities
}