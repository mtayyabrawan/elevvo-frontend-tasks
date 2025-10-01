function FooterNav() {
    const basicLinks = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Support", href: "#support" },
        { name: "Community", href: "#community" },
    ];
    const mainLinks = [
        { name: "Get Started", href: "#get-started" },
        { name: "Docs", href: "#docs" },
        { name: "Blog", href: "#blog" },
        { name: "Resources", href: "#resources" },
    ];
    const legalLinks = [
        { name: "FAQ", href: "#faq" },
        { name: "Privacy Policy", href: "#privacy-policy" },
        { name: "Cookies Policy", href: "#cookies-policy" },
        { name: "Terms & Conditions", href: "#terms-and-conditions" },
    ];
    return (
        <div className="flex h-full w-full items-center justify-center gap-1 py-0 sm:gap-2 sm:px-3 sm:py-2 lg:gap-5 lg:px-10">
            <div className="flex h-full w-24 flex-col items-start justify-center gap-0.5 text-[0.55rem] sm:w-36 sm:justify-start sm:gap-1.5 sm:text-[0.65rem] md:text-xs">
                {basicLinks.map((lnk, idx) => (
                    <a
                        href={lnk.href}
                        className="tracking-wide hover:underline"
                        key={idx}
                    >
                        {lnk.name}
                    </a>
                ))}
            </div>
            <div className="flex h-full w-24 flex-col items-start justify-center gap-0.5 text-[0.55rem] sm:w-36 sm:justify-start sm:gap-1.5 sm:text-[0.65rem] md:text-xs">
                {mainLinks.map((lnk, idx) => (
                    <a
                        href={lnk.href}
                        className="tracking-wide hover:underline"
                        key={idx}
                    >
                        {lnk.name}
                    </a>
                ))}
            </div>
            <div className="flex h-full w-24 flex-col items-start justify-center gap-0.5 text-[0.55rem] sm:w-36 sm:justify-start sm:gap-1.5 sm:text-[0.65rem] md:text-xs">
                {legalLinks.map((lnk, idx) => (
                    <a
                        href={lnk.href}
                        className="tracking-wide hover:underline"
                        key={idx}
                    >
                        {lnk.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterNav;
