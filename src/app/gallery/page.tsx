import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/Gallery/MainBanner";
import AboutContent from "../../components/Gallery/AboutContent";
import ImpressivePortfolio from "../../components/Gallery/ImpressivePortfolio";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
    return (
        <>
            <Navbar/>

            <MainBanner/>

            <AboutContent/>

            <ImpressivePortfolio/>

            <Footer/>
        </>
    );
}
