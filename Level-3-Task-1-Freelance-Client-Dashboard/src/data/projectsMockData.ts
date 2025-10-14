import type { ProjectType } from "../context/ProjectsContext";

const projectsMockData: ProjectType[] = [
    {
        id: 1,
        name: "Portfolio Website Development",
        description:
            "Designed and developed a responsive personal portfolio website using React and Tailwind CSS with dark mode support.",
        projectBanner:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        price: 250,
        status: "completed",
        client: {
            name: "Ayesha Khan",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        review: {
            feedback:
                "Excellent work! The site looks modern and loads fast. Communication was smooth throughout the project.",
            rating: 5,
        },
        duration: {
            from: "2025-02-15",
            to: "2025-03-01",
        },
    },
    {
        id: 2,
        name: "E-Commerce Admin Dashboard",
        description:
            "Built a MERN-based admin panel for managing products, orders, and users with JWT authentication and chart analytics.",
        projectBanner:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        price: 800,
        status: "completed",
        client: {
            name: "Ali Raza",
            image: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        review: {
            feedback:
                "Loved the dashboard UI and performance. Tayyab went above and beyond to integrate new features.",
            rating: 4.8,
        },
        duration: {
            from: "2025-03-05",
            to: "2025-04-02",
        },
    },
    {
        id: 3,
        name: "Landing Page for Marketing Campaign",
        description:
            "Created a high-conversion landing page with animations and newsletter integration using Next.js and Framer Motion.",
        projectBanner:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        price: 150,
        status: "pending",
        client: {
            name: "Sana Malik",
            image: "https://randomuser.me/api/portraits/women/19.jpg",
        },
        duration: {
            from: "2025-10-05",
            to: "2025-10-20",
        },
    },
    {
        id: 4,
        name: "Restaurant Mobile App UI",
        description:
            "Designed a mobile-friendly UI for a restaurant app featuring menu browsing, table booking, and payment screens in Figma.",
        projectBanner:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0",
        price: 400,
        status: "cancelled",
        client: {
            name: "Bilal Ahmed",
            image: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        duration: {
            from: "2025-06-10",
            to: "2025-06-25",
        },
    },
    {
        id: 5,
        name: "AI Blog Content Generator",
        description:
            "Developed a full-stack AI-based blog generator using OpenAI API with authentication, subscription tiers, and dashboard analytics.",
        projectBanner:
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
        price: 1200,
        status: "completed",
        client: {
            name: "Zainab Fatima",
            image: "https://randomuser.me/api/portraits/women/56.jpg",
        },
        review: {
            feedback:
                "Amazing project! Everything works perfectly and the dashboard is beautifully designed.",
            rating: 5,
        },
        duration: {
            from: "2025-07-01",
            to: "2025-08-15",
        },
    },
    {
        id: 6,
        name: "Company Branding Website",
        description:
            "Built a fast-loading static branding site for a startup using Astro and Tailwind CSS with SEO optimization.",
        projectBanner:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        price: 350,
        status: "completed",
        client: {
            name: "Hassan Tariq",
            image: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        review: {
            feedback:
                "Very satisfied! The website looks professional and ranks well on Google already.",
            rating: 4.9,
        },
        duration: {
            from: "2025-09-01",
            to: "2025-09-20",
        },
    },
];

export default projectsMockData;
