import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandReddit,
    IconBrandX,
    IconBrandYoutube,
} from "@tabler/icons-react";

function Footer() {
    const socialLinks = [
        {
            icon: <IconBrandGithub className="size-4" />,
            href: "http://github.com/mtayyabrawan",
        },
        {
            icon: <IconBrandLinkedin className="size-4" />,
            href: "http://linkedin.com/in/mtayyabrawan",
        },
        {
            icon: <IconBrandX className="size-4" />,
            href: "http://x.com/mtayyabrawan",
        },
        {
            icon: <IconBrandYoutube className="size-4" />,
            href: "http://youtube.com/@mtayyabrawan",
        },
        {
            icon: <IconBrandReddit className="size-4" />,
            href: "http://redit.com/u/mtayyabrawan",
        },
    ];
    return (
        <footer className="h-20 bg-slate-400/70 dark:bg-slate-800">
            <div className="flex h-[70%] items-center justify-between px-2">
                <div>
                    <h2 className="text-sm font-medium">Freelance Dashboard</h2>
                    <p className="indent-0.5 text-xs font-light">
                        Manage your freelance task easily
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    {socialLinks.map((link, idx) => (
                        <a href={link.href} key={idx}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
            <p className="w-full text-center text-xs font-thin text-slate-950 dark:text-slate-300">
                Copyright &copy; 2025
            </p>
        </footer>
    );
}

export default Footer;
