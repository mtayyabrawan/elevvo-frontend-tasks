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
        <div className="flex h-full w-full items-center justify-center gap-5 px-10 py-2">
            <div className="flex h-full w-36 flex-col items-start justify-center gap-1.5 text-xs">
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
            <div className="flex h-full w-36 flex-col items-start justify-center gap-1.5 text-xs">
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
            <div className="flex h-full w-36 flex-col items-start justify-center gap-1.5 text-xs">
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
