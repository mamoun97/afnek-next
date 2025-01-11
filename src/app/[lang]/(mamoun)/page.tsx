import Footer from "@/components/Footer";
import Banner from "@/components/Home/Banner";
import DownloadApp from "@/components/Home/DownloadApp";
import HeaderHome from "@/components/Home/HeaderHome";
import ReferenceDis from "@/components/Home/ReferenceDis";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import TopCitySection from "@/components/Home/TopCitySection";


export default function Page({ params: { lang } }: {
    params: {
      lang: string;
    };
  }){
    return <>

    <div>
      <div className=" relative z-30">
      <HeaderHome />
      </div>
      <div className="relative z-0">
      <TopCitySection />
      <Banner/>
      <ReferenceDis />
      <Section3 />
      <Section4 />
      <DownloadApp />
      <Footer />
      </div>
    </div>

    </>
}