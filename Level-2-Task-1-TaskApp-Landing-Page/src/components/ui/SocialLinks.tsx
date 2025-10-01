import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandPinterest,
    IconBrandX,
    IconBrandYoutube,
} from "@tabler/icons-react";

function SocialLinks() {
    const links = [
        {
            icon: <IconBrandFacebook className="size-4 md:size-5" />,
            href: "#facebook",
        },
        { icon: <IconBrandX className="size-4 md:size-5" />, href: "#twitter" },
        {
            icon: <IconBrandLinkedin className="size-4 md:size-5" />,
            href: "#linkedin",
        },
        {
            icon: <IconBrandGithub className="size-4 md:size-5" />,
            href: "#github",
        },
        {
            icon: <IconBrandYoutube className="size-4 md:size-5" />,
            href: "#youtube",
        },
        {
            icon: <IconBrandInstagram className="size-4 md:size-5" />,
            href: "#instagram",
        },
        {
            icon: <IconBrandPinterest className="size-4 md:size-5" />,
            href: "#pinterest",
        },
    ];
    return (
        <div className="flex items-center justify-center gap-2.5 md:gap-4">
            {links.map((lnk, idx) => (
                <a
                    key={idx}
                    href={lnk.href}
                    target="_blank"
                    className="transile rounded-md bg-stone-400 p-0.75 hover:bg-stone-500 md:p-1 dark:bg-stone-600"
                >
                    {lnk.icon}
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
