import axios from "axios";

const url = "https://api-hotel.afnek.com";

export const ApiConfig = {
    rootUrl: url,
    rootImagesUrl: "https://hotel-dev-dz.s3.amazonaws.com/",
    version: "1.0.0"
};
const http = () => {
    let a= axios.create({
        baseURL: ApiConfig.rootUrl,
        
        headers: {
            cache: "no-cache",
            "Content-type": "application/json",
            // cache: "no-cache",
            "Authorization": "Bearer " + localStorage.getItem("token") ?? ""
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
    let a= axios.create({
        baseURL: ApiConfig.rootUrl,
        headers: {
            cache: "no-cache",
            "Content-type": "multipart/form-data",
            "Authorization": "Bearer " + localStorage.getItem("token") ?? ""
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


export { http, httpUpload };

export default ApiConfig;