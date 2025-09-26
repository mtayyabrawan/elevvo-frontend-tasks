import NewsLetter from "../../NewsLetter";
import ThemeToggle from "./ThemeToggle";

function Footer() {
    return (
        <footer className="mx-auto grid h-80 w-full grid-cols-2 grid-rows-4 rounded-lg bg-stone-800 shadow-[0px_0px_5px_1px_black_inset] ring-[0.25px] ring-neutral-100">
            <div className="flex h-full w-full items-center justify-between px-8">
                <div className="text-sm">
                    <h1 className="text-lg font-medium">Newsletter</h1>
                    <p className="mt-1 text-sm">
                        Subscribe our news letter for latest updates
                    </p>
                </div>
                <NewsLetter />
            </div>
            <div></div>
            <div className="col-span-2 row-start-2 row-end-4 h-full w-full"></div>
            <div className="col-span-2 flex h-full w-full items-center justify-between px-8 text-xs">
                <div>
                    <ThemeToggle />
                </div>
                <p>
                    Copyright &copy; {new Date().getFullYear()} | TasKeep.com |
                    All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
