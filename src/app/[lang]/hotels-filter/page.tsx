"use client"
import HotelApi from "@/api/hotel";
import CardHotel from "@/components/CardHotel";
import Container from "@/components/Container";
import FilterComponent from "@/components/FilterComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HotelListLoading } from "@/components/Loading";


export default function HotelsFilter() {

    const {data:hotels,isLoading} = HotelApi.useReadAll("?limit=5&page=1")
    
    return (
        <div>
            <Header isHome={false} showForm={true} />
            <Container className="mt-8">
                <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-1 grid-flow-row">
                    <div className="col-span-1">
                        <FilterComponent />
                    </div>
                    <div className="col-span-3 max-lg:col-span-1 ">
                        {
                            isLoading ? <HotelListLoading/> : <div className="col-span-3 max-lg:col-span-1 grid grid-cols-1 gap-2">
                                
                                {
                                    hotels?.data?.map((el,k)=>{
                                        return <CardHotel data={el} key={k}/>
                                    })
                                }
                            </div>
                        }

                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}
