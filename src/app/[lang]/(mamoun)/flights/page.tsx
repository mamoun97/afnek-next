import Container from "@/components/Container";
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
                <Header isHome={true} showForm={true} type="flights" />
            </div>
            <div className="relative z-0">
                <Container className="griwd gridw-cols-3 my-8">
                    <div>
                        <h1 className="text-xl text-center font-semibold">Who we are?</h1>
                        <p className="text-sm text-center mt-4 opacity-80">
                            Afnek est la startup pionnière dans le domaine du voyage en Algérie, offrant une expérience transparente de réservation de billets pour les vols locaux et internationaux. Nous collaborons avec plus de 21 compagnies aériennes . De plus, nous proposons des moyens de paiement simples, diversifiés et sécurisés, tels que les cartes CIB et EDAHABIA, ainsi que paiement à la livraison
                        </p>
                    </div>
                </Container>
                <Footer />
            </div>
        </div>

    </>
}