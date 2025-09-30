import { Link } from "react-router";

function Navbar() {
    const navlinks = [
        { lable: "Get Started", link: "#get-started" },
        { lable: "Docs", link: "#docs" },
        { lable: "Pricing", link: "#pricing" },
        { lable: "Resources", link: "#resources" },
        { lable: "Blog", link: "#blog" },
    ];
    return (
        <header className="sticky top-1 z-10 mx-auto grid h-10 grid-cols-2 grid-rows-1 place-items-center rounded-full bg-stone-50/40 px-1.5 ring-[1px] ring-stone-100 drop-shadow-sm drop-shadow-stone-200 backdrop-blur-xs sm:top-3 sm:h-12 sm:w-[90%] dark:bg-stone-600/40 dark:ring-stone-500 dark:drop-shadow-stone-900">
            <div className="flex h-full w-full items-center justify-start text-sm font-medium sm:pl-4 sm:text-lg">
                <Link
                    to="/"
                    className="tracking-wider text-shadow-[0px_0px_5px_var(--color-stone-400)] dark:text-shadow-[0px_0px_5px_var(--color-stone-900)]"
                >
                    TasKeep
                </Link>
            </div>
            <nav className="flex h-[80%] w-fit items-center justify-center gap-2 justify-self-end rounded-full bg-stone-400/60 px-2 text-[0.65rem] sm:gap-7 sm:px-4 sm:text-sm dark:bg-stone-800/60">
                {navlinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.link}
                        className="transile text-nowrap text-shadow-[0px_0px_5px_var(--color-stone-50)] hover:text-shadow-[0px_0px_10px_var(--color-stone-500)] dark:text-shadow-[0px_0px_5px_var(--color-stone-400)] dark:hover:text-shadow-[0px_0px_10px_var(--color-stone-100)]"
                    >
                        {link.lable}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;
