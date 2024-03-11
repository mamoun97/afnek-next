type City = {
    image: string,
    name: string,
    price: number
}

interface PaginationFilter {
    page?: number;
    limit?: number;
    sort?: { field: React.Key; by: "ASC" | "DESC" }[];
    search?: { field: string; value?: string }[];
    filter?: { field: string; operation: string; value: string | string[] }[];
    relations?: string[];
}
type UserAuth={

}

type RatingNumber=1|2|3|4|5
type Filter= {
    address:string,
    date_start:string|date|null,
    date_end:string|date|null,
    min_price:number,
    max_price:number,
    price_order:"ASC"|"DESC",
    rating:RatingNumber[],
    adult:number,
    children:number,
    room:number
}