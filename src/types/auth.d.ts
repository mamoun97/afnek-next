type User={
    id: number,
    first_name:string,
    last_name:string,
    image:string,
    phone:string,
    email:string,
    socket_id: string|null,
    lat: number|null,
    lng: number|null,
    token_notification: string|null,
    state: boolean,
    role: {
        name: string
    }[],
    hotel: any[]
}