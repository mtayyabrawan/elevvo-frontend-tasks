import NewsLetter from "../../NewsLetter";

function Footer() {
    return (
        <footer className="mx-auto grid h-52 w-full grid-cols-2 grid-rows-3 rounded-lg bg-stone-800 shadow-[0px_0px_5px_1px_black_inset] ring-[0.25px] ring-neutral-100">
            <div className="flex w-full items-center justify-between px-8">
                <div className="text-sm">
                    <h1 className="text-lg font-medium">Newsletter</h1>
                    <p className="mt-1 text-sm">
                        Subscribe our news letter for latest updates
                    </p>
                </div>
                <NewsLetter />
            </div>
            <div></div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
        </footer>
    );
}

export default Footer;
