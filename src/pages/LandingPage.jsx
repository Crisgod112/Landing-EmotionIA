// src/pages/LandingPage.jsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import KeyFeatures from '../components/KeyFeatures';
import HowItWorks from '../components/HowItWorks';
import ChartUtilidad from '../components/ChartUtilidad';
import ChartProblema from '../components/ChartProblema';
import Comparison from '../components/Comparison';
import Trust from '../components/Trust';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import TechOverview from "../components/TechOverview.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx"; // <-- ¡IMPORTA EL ENVOLTORIO!
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";

function LandingPage() {
    return (
        <>
            <Header />
            <Hero />

            {/* --- ENVUELVE CADA SECCIÓN CON AnimatedSection --- */}
            <AnimatedSection>
                <Benefits />
            </AnimatedSection>

            <AnimatedSection>
                <KeyFeatures />
            </AnimatedSection>

            <AnimatedSection>
                <HowItWorks />
            </AnimatedSection>

            <AnimatedSection>
                <TechOverview />
            </AnimatedSection>

            <AnimatedSection>
                <ChartUtilidad />
            </AnimatedSection>

            <AnimatedSection>
                <ChartProblema />
            </AnimatedSection>

            <AnimatedSection>
                <Comparison />
            </AnimatedSection>

            <AnimatedSection>
                <Trust />
            </AnimatedSection>

            <AnimatedSection>
                <CTA />
            </AnimatedSection>

            <AnimatedSection>
                <PrivacyPolicy />
            </AnimatedSection>

            <Footer />
        </>
    );
}

export default LandingPage;