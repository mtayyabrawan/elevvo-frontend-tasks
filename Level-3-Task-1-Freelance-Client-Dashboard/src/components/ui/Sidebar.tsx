import { Link } from "react-router";

function Sidebar() {
    const dashboardNavlinks = [
        {
            placeholder: "Overview",
            href: "/dashboard",
        },
        {
            placeholder: "Projects",
            href: "/dashboard/projects",
        },
    ];
    return (
        <nav className="scrollbar-custom flex h-full w-[15%] flex-col items-center justify-start gap-2 overflow-y-auto bg-slate-400/50 p-2 text-sm dark:bg-slate-700/50">
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
    );
}

export default Sidebar;
