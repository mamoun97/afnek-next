"use client"
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import FormFlights from "@/components/FormFlights";
import Header from "@/components/Header";
import useLang from "@/lang/useLang";
import { Toaster } from "react-hot-toast";




export default function Page({ params: { lang } }: {
    params: {
        lang: string;
    };
}) {
    const { lang: l } = useLang()
    const text = {
        en: {
            title: "Who we are?",
            desc: " Afnek est la startup pionnière dans le domaine du voyage en Algérie, offrant une expérience transparente de réservation de billets pour les vols locaux et internationaux. Nous collaborons avec plus de 21 compagnies aériennes . De plus, nous proposons des moyens de paiement simples, diversifiés et sécurisés, tels que les cartes CIB et EDAHABIA, ainsi que paiement à la livraison"
        },
        fr: {
            title: "Qui sommes-nous ?",
            desc: "Afnek est la startup pionnière dans le domaine du voyage en Algérie, offrant une expérience transparente de réservation de billets pour les vols locaux et internationaux. Nous collaborons avec plus de 21 compagnies aériennes. De plus, nous proposons des moyens de paiement simples, diversifiés et sécurisés, tels que les cartes CIB et EDAHABIA, ainsi que le paiement à la livraison."
        },
        ar: {
            title: "من نحن؟",
            desc: "Afnek هي الشركة الناشئة الرائدة في مجال السفر في الجزائر، حيث تقدم تجربة حجز تذاكر سلسة للرحلات المحلية والدولية. نتعاون مع أكثر من 21 شركة طيران. بالإضافة إلى ذلك، نوفر وسائل دفع بسيطة ومتنوعة وآمنة، مثل بطاقات CIB وEDAHABIA، بالإضافة إلى الدفع عند الاستلام."
        }
    }
    return <>

        <div>
            <div className=" relative z-30">
                <Header isHome={true} showForm={true} type="flights" />
            </div>
            <div className="relative z-50">

                <Container className="grid grid-cols-5 gap-4 mb-8 max-md:grid-cols-2">
                    <div className="col-span-3">
                        <FormFlights />
                    </div>
                    <div className="flex col-span-2 items-center pt-24 max-md:pt-6 flex-col gap-2">
                        <h1 className="text-xl text-center font-semibold">{text[l].title}</h1>
                        <p className="text-sm text-center mt-4 opacity-80">
                            {text[l].desc}
                        </p>
                    </div>
                </Container>
                <Footer />
            </div>
            <Toaster position="bottom-center" />
        </div>

    </>
}