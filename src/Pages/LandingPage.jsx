import Navbar from "../components/Navbar";
import HeroSection from "../components/heroSection";
import Carrusel from "../components/carruselLandingSection"
import Nosotros from "../components/nosotrosSection";
import Servicios from "../components/serviciosSection";
import Empresasyempemdedores from "../components/empresas-emprendiminetoSection";
import Historias from "../components/historiasSection";
import FAQ from "../components/preguntasFrecuentesSection";
import VocalTech from "../components/vocalTechSection";
import Footer from "../components/footer";

const LandingPage = () => {
    return (
        <div className=" text-white">
            {/* Navbar */}
            <header className="p-4 bg-gray-950">
                <Navbar />
            </header>

            {/* Secciones */}
            <HeroSection />
            <Carrusel />
            <Nosotros />
            <Servicios />
            <Empresasyempemdedores />
            <Historias />
            <FAQ />
            <VocalTech />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
