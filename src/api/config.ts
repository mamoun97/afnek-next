import axios from "axios";

const url = "https://api-hotel.afnek.com";

export const ApiConfig = {
    rootUrl: url,
    rootImagesUrl: "https://hotel-dev-dz.s3.amazonaws.com/",
    version: "1.0.0",

    awsUrl: "https://hotel-dev-dz.s3.amazonaws.com/",
    otpVerification: '/otp_verification',
    setNewPassword: '/set_new_password',
    forgetPassword: '/forget_password',
    signIn: '/auth/SignIn',
    identities: '/auth/Identities',
    getUser: '/user/',
    userProfile: '/user/client/profile',
    awsEndPoint: '/aws/upload',
    hotelEndPoint: '/hotel',
    //favoris
    favHotelEndPoint: '/favorite/hotel',
    //booking
    bookingEndPoint: '/booking',
    countries:"/location/country",
    flightCreate:"/mailer/flight ",
    //filter
    amenityEndPoint: '/amenity',
    tagesEndPoint: '/tag',
    nerbyndPoint: '/nearby',

    settingsEndPoint: '/setting',
    displaySettingsEndPoint: '/display',
};
const http = () => {
    let a = axios.create({
        baseURL: ApiConfig.rootUrl,

        headers: {
            // cache: "no-cache",
            "Content-type": "application/json",
            // cache: "no-cache",
            "Authorization": "Bearer " + (localStorage.getItem("token") ?? "")
        }
    })

    a.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                // store.dispatch(setLogout());
                window.location.href = "/";
            }
            if (error.response.status === 403) {
                window.location.href = "/access-denied";
            }
            if (
                (error.response.status === 400 || error.response.status === 422) &&
                error.response.data
            ) {
                error = error.response.data;
            }
            return Promise.reject(error);
        }
    )
    return a
}

const httpUpload = () => {
    let a = axios.create({
        baseURL: ApiConfig.rootUrl,
        headers: {
            cache: "no-cache",
            "Content-type": "multipart/form-data",
            "Authorization": "Bearer " +( localStorage.getItem("token") ?? "")
        }
    })
    a.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                // store.dispatch(setLogout());
                window.location.href = "/";
            }
            if (error.response.status === 403) {
                window.location.href = "/access-denied";
            }
            if (
                (error.response.status === 400 || error.response.status === 422) &&
                error.response.data
            ) {
                error = error.response.data;
            }
            return Promise.reject(error);
        }
    )
    return a
}
const swrOptions = {

    dedupingInterval: 50,
    refreshWhenHidden: false,
    revalidateOnFocus: false,

}

export { http, httpUpload, swrOptions ,axios};

export default ApiConfig;