import ApiConfig, { http } from "./config";




const getUserInfo = async (): Promise<User> => {
    const { data } = await http().get(ApiConfig.userProfile);
    return data
}
const updateUserInfo = async (user:any): Promise<any> => {
    const { data } = await http().patch(ApiConfig.userProfile, user);
    return data
}

export const ProfileApi={
    getUserInfo,
    updateUserInfo
}