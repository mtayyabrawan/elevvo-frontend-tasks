import NewsLetter from "../../NewsLetter";
import AndroidCard from "../AndroidCard";
import AppleCard from "../AppleCard";
import FooterNav from "../FooterNav";
import SocialLinks from "../SocialLinks";
import ThemeToggle from "./ThemeToggle";

function Footer() {
    return (
        <footer className="mx-auto grid h-80 w-full grid-cols-2 grid-rows-5 rounded-lg bg-stone-300 shadow-[0px_0px_5px_1px_white_inset] ring-[0.25px] ring-neutral-800 dark:bg-stone-800 dark:shadow-[0px_0px_5px_1px_black_inset] dark:ring-neutral-100">
            <div className="col-span-2 row-span-1 flex h-full w-full items-center justify-between px-2 sm:px-4 md:px-8 lg:col-span-1 lg:row-span-2">
                <div>
                    <h1 className="text-xs font-medium sm:text-sm md:text-lg">
                        Newsletter
                    </h1>
                    <p className="mt-0.5 text-[0.55rem] leading-loose sm:text-xs md:mt-1 md:text-sm">
                        Subscribe our news letter for latest updates
                    </p>
                </div>
                <NewsLetter />
            </div>
            <div className="col-span-2 row-span-1 flex h-full w-full items-center justify-center px-4 sm:justify-end md:px-8 lg:col-span-1 lg:row-span-2">
                <SocialLinks />
            </div>
            <div className="col-span-2 row-span-2 grid h-full w-full grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
                <div className="flex flex-row items-center justify-center gap-1.5 sm:flex-col sm:items-end sm:justify-end sm:pr-3 sm:pb-1.5 md:flex-row md:gap-2 md:pb-2.5 lg:gap-2 lg:pr-10">
                    <AndroidCard />
                    <AppleCard />
                </div>
                <FooterNav />
            </div>
            <div className="col-span-2 flex h-full w-full items-center justify-between px-2 text-[0.55rem] sm:px-4 sm:text-[0.65rem] md:px-8 md:text-xs">
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
