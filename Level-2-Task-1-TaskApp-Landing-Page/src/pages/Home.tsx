import FeaturesSection from "../components/ui/FeaturesSection";
import HeroSection from "../components/ui/HeroSection";
import PricingSection from "../components/ui/PricingSection";
import TestimonialSection from "../components/ui/TestimonialSection";
import aos from "aos";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        aos.init({
            easing: "ease-in-out",
            duration: 700,
            mirror: true,
        });
    }, []);
    return (
        <div className="space-y-5 p-3">
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialSection />
        </div>
    );
}

export default Home;
