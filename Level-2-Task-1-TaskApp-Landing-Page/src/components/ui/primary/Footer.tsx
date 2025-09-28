import NewsLetter from "../../NewsLetter";
import AndroidCard from "../AndroidCard";
import AppleCard from "../AppleCard";
import FooterNav from "../FooterNav";
import SocialLinks from "../SocialLinks";
import ThemeToggle from "./ThemeToggle";

function Footer() {
    return (
        <footer className="mx-auto grid h-80 w-full grid-cols-2 grid-rows-4 rounded-lg bg-stone-300 shadow-[0px_0px_5px_1px_white_inset] ring-[0.25px] ring-neutral-800 dark:bg-stone-800 dark:shadow-[0px_0px_5px_1px_black_inset] dark:ring-neutral-100">
            <div className="flex h-full w-full items-center justify-between px-8">
                <div className="text-sm">
                    <h1 className="text-lg font-medium">Newsletter</h1>
                    <p className="mt-1 text-sm">
                        Subscribe our news letter for latest updates
                    </p>
                </div>
                <NewsLetter />
            </div>
            <div className="flex h-full w-full items-center justify-end px-8">
                <SocialLinks />
            </div>
            <div className="col-span-2 row-start-2 row-end-4 grid h-full w-full grid-cols-2 grid-rows-1">
                <div className="flex items-end justify-end gap-3 pr-10 pb-2.5">
                    <AndroidCard />
                    <AppleCard />
                </div>
                <FooterNav />
            </div>
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
