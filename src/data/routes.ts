export const routes={
    home:"/",
    hotel:(id:number)=>"/hotel/"+id,
    auth:{
        login:"/login"
    },
    search:{
        root:"/search",
        id:(id:number)=>"/search/"+id
    },
    welcome_agency:"/welcome-agency",
    welcome_hotel:"/welcome-hotel",
    register_agency:"/register-agency",
    register_hotel:"/register-hotel",
}