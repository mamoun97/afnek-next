type City = {
    code: number,
    image: string,
    name: string,
    price: number
}

interface PaginationFilter {
    page?: number;
    limit?: number;
    sort?: { field: React.Key; by: "ASC" | "DESC" }[];
    search?: { field: string; value?: string }[];
    filter?: { field: string; operation: string; value: string | string[] | number | number[] }[];
    relations?: string[];
    date?: string,
    paranoid?: boolean
}



type RatingNumber = 1 | 2 | 3 | 4 | 5
type Filter = {
    limit: number,
    page: number,
    id?:number,
    address: string,
    date_start: string | date | null,
    date_end: string | date | null,
    min_price: number,
    max_price: number,
    price_order?: "ASC" | "DESC",
    rating?: RatingNumber[],
    adult: number,
    name?:string,
    children: number,
    room: number
}
type Nearby = {
    id: number,
    name_ar: string | null,
    name_fr: string | null,
    name_en: string,
    icon: string,
    created_at: string
}
type NearbyResponse = {
    count: number,
    data: Nearby[]
}
type Amenity = {
    id: number,
    name_en: string,
    name_ar: string | null,
    name_fr: string | null,
    icon: string,
    created_at: string
}
type AmenityResponse = {
    count: number,
    data: Amenity[]
}
type Tag = {
    id: number,
    name_ar: string | null,
    name_fr: string | null,
    name_en: string,
    color: string | null,
    icon: string
}
type TagResponse = {
    count: number,
    data: Tag[]
}
type Wilaya = {
    id: number,
    name_ar: string,
    name_fr: string,
    name_en: string,
    code: number,
    lat: number,
    lng: number
}
type WilayaResponse = {
    data: Wilaya[],
    count: number
}

type CountriesGeo = {
    adminCode1: string,
    lng: string,
    geonameId: number,
    toponymName: string,
    countryId: string,
    fcl: string,
    population: number,
    countryCode: string,
    name: string,
    fclName: string,
    countryName: string,
    fcodeName: string,
    adminName1: string,
    lat: string,
    fcode: string,u
    adminCodes1?: {
        ISO3166_2: string
    },
}
type CountriesGeoResponse = {
    totalResultsCount: number,
    geonames: CountriesGeo[]
}

