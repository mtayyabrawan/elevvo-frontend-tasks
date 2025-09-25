import { Link } from "react-router";

function Navbar() {
    const navlinks = [
        { lable: "Get Started", link: "#get-started" },
        { lable: "Docs", link: "#docs" },
        { lable: "Pricing", link: "#pricing" },
        { lable: "Blog", link: "#blog" },
    ];
    return (
        <header className="sticky top-3 mx-auto grid h-12 w-[90%] grid-cols-2 grid-rows-1 place-items-center rounded-full bg-stone-600 px-1.5 ring-[1px] ring-stone-500 drop-shadow-xs drop-shadow-stone-900">
            <div className="flex h-full w-full items-center justify-start pl-4 text-lg font-medium">
                <Link
                    to="/"
                    className="tracking-wider text-shadow-[0px_0px_5px_var(--color-stone-900)]"
                >
                    TasKeep
                </Link>
            </div>
            <nav className="flex h-[80%] w-fit items-center justify-center gap-7 justify-self-end rounded-full bg-stone-700/70 px-[1rem] text-sm">
                {navlinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.link}
                        className="text-nowrap text-shadow-[0px_0px_5px_var(--color-stone-400)] hover:text-shadow-[0px_0px_10px_var(--color-stone-100)]"
                    >
                        {link.lable}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;
