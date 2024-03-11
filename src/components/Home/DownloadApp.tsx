import Image from "next/image";
import images from "../../assets";
import Container from "../Container";

export default function DownloadApp() {
    return (
        <div>
            <Container className="mt-8 mb-12">
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                    <div className="col-span-1 flex flex-col justify-center">
                        <h1 className='text-3xl font-bold '>
                            Download our apps & Enjoy premium privilges
                        </h1>
                        <p className='text-gray-500  mt-4 text-lg font-semibold'>
                            Plan your stay, book your room and trav with peace of mind</p>
                        <div className="grid grid-cols-2  gap-4 mt-8 max-w-[400px]">
                            <Image src={images.playstore} height={"28"} alt="" />
                            <Image src={images.appstore} height={"28"} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <Image src={images.phoneBlue} className="w-full max-w-[230px]" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
