import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function Page({ params: { lang } }: {
    params: {
        lang: string;
    };
}) {
    return <>

        <div>
            <div className=" relative z-30">
                <Header isHome={true} showForm={true} type="organized_trips"/>
            </div>
            <div className="relative z-0">

                <Footer />
            </div>
        </div>

    </>
}