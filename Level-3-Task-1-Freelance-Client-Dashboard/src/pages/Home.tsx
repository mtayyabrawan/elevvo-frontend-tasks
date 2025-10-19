function Home() {
    type Feature = { id: string; title: string; desc: string; icon: string };
    type Project = {
        id: string;
        title: string;
        client: string;
        status: string;
    };
    type Testimonial = {
        id: string;
        name: string;
        role: string;
        quote: string;
    };

    const features: Feature[] = [
        {
            id: "f1",
            icon: "⚡",
            title: "Fast Onboarding",
            desc: "Get clients and projects started quickly with templated proposals and intake forms.",
        },
        {
            id: "f2",
            icon: "🔒",
            title: "Secure Payments",
            desc: "Integrated invoicing and payouts with industry-standard security.",
        },
        {
            id: "f3",
            icon: "📊",
            title: "Insights & Reports",
            desc: "Track earnings, time, and client activity with clear dashboards.",
        },
        {
            id: "f4",
            icon: "🤝",
            title: "Client Management",
            desc: "Organize contacts, feedback, and milestones in one place.",
        },
        {
            id: "f5",
            icon: "🧾",
            title: "Custom Contracts",
            desc: "Create and sign agreements without leaving the app.",
        },
        {
            id: "f6",
            icon: "📨",
            title: "Automated Follow-ups",
            desc: "Reduce admin time with scheduled messages and reminders.",
        },
    ];

    const projects: Project[] = [
        {
            id: "p1",
            title: "Acme Website Redesign",
            client: "Acme Corp",
            status: "In Progress",
        },
        {
            id: "p2",
            title: "Brand Identity Pack",
            client: "Orion Studio",
            status: "Proposal",
        },
        {
            id: "p3",
            title: "Mobile App UI",
            client: "Beta LLC",
            status: "Completed",
        },
        {
            id: "p4",
            title: "Landing Page A/B Tests",
            client: "Gamma",
            status: "In Progress",
        },
    ];

    const testimonials: Testimonial[] = [
        {
            id: "t1",
            name: "Sana K.",
            role: "Founder, Acme",
            quote: "Clear, fast communication and on-time delivery. Love the dashboard insights.",
        },
        {
            id: "t2",
            name: "Omar R.",
            role: "Product Lead, Beta",
            quote: "Invoices and contracts saved us hours — highly recommended for freelancers.",
        },
    ];

    return (
        <div className="h-full w-full p-6">
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl leading-tight font-medium sm:text-4xl">
                            Smarter freelancing. Faster delivery.
                        </h2>
                        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                            Manage clients, proposals, invoices, and project
                            milestones from one responsive dashboard optimized
                            for busy freelancers.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="cursor-pointer rounded-md bg-slate-800 px-4 py-2 text-white focus-visible:outline-hidden dark:bg-slate-400">
                                Get Started
                            </button>
                            <button className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 focus-visible:outline-hidden dark:border-gray-700">
                                Explore Features
                            </button>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Active Clients
                                </div>
                                <div className="mt-1 text-2xl font-semibold">
                                    12
                                </div>
                            </div>
                            <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Open Projects
                                </div>
                                <div className="mt-1 text-2xl font-semibold">
                                    4
                                </div>
                            </div>
                            <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    This Month
                                </div>
                                <div className="mt-1 text-2xl font-semibold">
                                    $8,420
                                </div>
                            </div>
                            <div className="rounded bg-white p-4 shadow dark:bg-gray-800">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Response Time
                                </div>
                                <div className="mt-1 text-2xl font-semibold">
                                    2h
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                            <div className="flex h-56 items-center justify-center rounded-md bg-gradient-to-br from-indigo-100 to-indigo-50 sm:h-64 dark:from-indigo-900 dark:to-indigo-800">
                                <svg
                                    width="220"
                                    height="140"
                                    viewBox="0 0 220 140"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-70"
                                >
                                    <rect
                                        x="10"
                                        y="10"
                                        width="200"
                                        height="120"
                                        rx="8"
                                        fill="white"
                                    />
                                    <path
                                        d="M24 44h172M24 70h172M24 96h172"
                                        stroke="#e5e7eb"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="text-sm">Next Invoice</div>
                                <div className="text-right font-semibold">
                                    $1,200
                                </div>
                                <div className="text-sm">Upcoming Meeting</div>
                                <div className="text-right font-semibold">
                                    Today, 3:00 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <h3 className="mb-4 text-xl font-semibold">Features</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div
                            key={f.id}
                            className="rounded-lg bg-white p-4 shadow transition hover:shadow-md dark:bg-gray-800"
                        >
                            <div className="text-2xl">{f.icon}</div>
                            <div className="mt-2 font-semibold">{f.title}</div>
                            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {f.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Recent Projects</h3>
                    <a
                        className="text-sm text-indigo-600 hover:underline"
                        href="#"
                    >
                        View all
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid min-w-[720px] grid-cols-4 gap-4">
                        {projects.map((p) => (
                            <div
                                key={p.id}
                                className="rounded-lg bg-white p-4 shadow dark:bg-gray-800"
                            >
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {p.client}
                                </div>
                                <div className="mt-2 font-semibold">
                                    {p.title}
                                </div>
                                <div className="mt-3">
                                    <span
                                        className={`inline-block rounded px-2 py-1 text-xs ${p.status === "Completed" ? "bg-green-100 text-green-800" : p.status === "Proposal" ? "bg-yellow-100 text-yellow-800" : "bg-indigo-100 text-indigo-800"}`}
                                    >
                                        {p.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <h3 className="mb-4 text-xl font-semibold">
                    What freelancers say
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {testimonials.map((t) => (
                        <blockquote
                            key={t.id}
                            className="rounded-lg bg-white p-4 shadow dark:bg-gray-800"
                        >
                            <p className="text-gray-600 dark:text-gray-300">
                                “{t.quote}”
                            </p>
                            <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                — {t.name},{" "}
                                <span className="italic">{t.role}</span>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
