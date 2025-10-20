import { Link } from "react-router";

function Sidebar() {
    const dashboardNavlinks = [
        { placeholder: "Overview", href: "/dashboard" },
        { placeholder: "Projects", href: "/dashboard/projects" },
    ];

    return (
        <>
            <nav className="flex w-full gap-2 overflow-x-auto bg-slate-400/50 p-2 text-sm md:hidden dark:bg-slate-700/50">
                {dashboardNavlinks.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.href}
                        className="rounded-sm bg-slate-300 px-3 py-2 text-sm whitespace-nowrap hover:bg-slate-300/50 dark:bg-slate-600"
                    >
                        {link.placeholder}
                    </Link>
                ))}
            </nav>
            <nav className="scrollbar-custom hidden h-full w-[15%] flex-col items-start justify-start gap-2 overflow-y-auto bg-slate-400/50 p-2 text-sm md:flex dark:bg-slate-700/50">
                {dashboardNavlinks.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.href}
                        className="transile w-full rounded-sm bg-slate-300 py-1.5 pl-2 hover:bg-slate-300/50 dark:bg-slate-600"
                    >
                        {link.placeholder}
                    </Link>
                ))}
            </nav>
        </>
    );
}

export default Sidebar;
