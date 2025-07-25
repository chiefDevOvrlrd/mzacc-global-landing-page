import { NavBar } from "../components/NavBar";
import { Hero } from "../sections/Hero";
import { Solution } from "../sections/Solutions";
import { SubCompanies } from "../sections/SubCompanies";
import { Pricing } from "../sections/Pricing";
import { Faq } from "../sections/Faq";
import Footer from "../sections/Footer";

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero/>
            <Solution/>
            <SubCompanies/>
            <Pricing/>
            <Faq/>
            <Footer/>
        </>
    );
};