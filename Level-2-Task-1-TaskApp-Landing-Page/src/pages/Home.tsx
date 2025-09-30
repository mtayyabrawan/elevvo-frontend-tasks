import FeaturesSection from "../components/ui/FeaturesSection";
import HeroSection from "../components/ui/HeroSection";
import PricingSection from "../components/ui/PricingSection";
import TestimonialSection from "../components/ui/TestimonialSection";

function Home() {
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
