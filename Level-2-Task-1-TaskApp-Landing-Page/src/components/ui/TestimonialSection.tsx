import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";
function TestimonialSection() {
    const testimonials = [
        {
            name: "Mohammed Alvi",
            review: "Taskeep completely changed the way I manage my daily tasks. Before, I was drowning in sticky notes and half baked todo lists.",
        },
        {
            name: "Chloe Bennett",
            review: "As a student, I juggle lectures, assignments, and part time work. Taskeep keeps me on track without overwhelming me.",
        },
        {
            name: "Rizwan Ahmed",
            review: "I’ve tried a bunch of task apps, but Taskeep is the only one I stuck with. The interface is smooth and collaboration is easy.",
        },
        {
            name: "Noor Fatima",
            review: "Managing a remote team means dozens of moving parts every day. Taskeep makes it easy to assign tasks and set priorities.",
        },
        {
            name: "Zainab Hussain",
            review: "What I like most about Taskeep is that it doesn’t try to be everything it’s focused on helping you get things done.",
        },
    ];
    return (
        <div>
            <h2 className="text-center text-sm font-medium sm:text-lg md:text-xl">
                Testimonials
            </h2>
            <Marquee
                direction="left"
                speed={150}
                className="z-0 my-4 sm:my-8 md:my-12"
            >
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
