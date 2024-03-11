import Footer from "@/components/Footer";
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
      <HeaderHome />
      {/* <Container>
        <CardHotel />
      </Container> */}
      <TopCitySection />
      <ReferenceDis />
      <Section3 />
      <Section4 />
      <DownloadApp />
      <Footer />
    </div>

    </>
}