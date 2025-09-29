import FeaturesSection from "../components/ui/FeaturesSection";
import HeroSection from "../components/ui/HeroSection";

function Home() {
    return (
        <div className="space-y-5 p-3">
            <HeroSection />
            <FeaturesSection />
        </div>
    );
}

export default Home;
