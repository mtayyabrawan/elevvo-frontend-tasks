import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";
function TestimonialSection() {
    const testimonials = [
        {
            name: "Mohammed Alvi",
            review: "If you're looking for a dependable and creative web dev, this is the one! Delivered my e-commerce site flawlessly.",
        },
        {
            name: "Chloe Bennett",
            review: "The developer really understood my vision and brought it to life. Loved the animations and transitions!",
        },
        {
            name: "Rizwan Ahmed",
            review: "Exceptional skills and dedication! I am beyond happy with my portfolio site. Clean and minimal just how I wanted it.",
        },
        {
            name: "Noor Fatima",
            review: "Amazing turnaround time and great communication. Helped me out with hosting too. 10/10 would hire again.",
        },
        {
            name: "Zainab Hussain",
            review: "Creative and technically strong! Handled all feedback professionally and delivered a user-friendly design.",
        },
        {
            name: "Omar Farooq",
            review: "Reliable, smart, and proactive. Fixed some old bugs too without even asking. Great experience overall.",
        },
        {
            name: "Sophia Kim",
            review: "From Figma to live website, everything was smooth. Highly impressed with the Tailwind integration and responsiveness!",
        },
    ];
    return (
        <div>
            <h2 className="text-center text-xl font-medium">Testimonials</h2>
            <Marquee direction="left" speed={150} className="my-12">
                {testimonials.map((user, idx) => (
                    <Testimonial
                        name={user.name}
                        review={user.review}
                        image="/vite.svg"
                        key={idx}
                    />
                ))}
            </Marquee>
        </div>
    );
}

export default TestimonialSection;
