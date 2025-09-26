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
        { icon: <IconBrandFacebook size={18} />, href: "#facebook" },
        { icon: <IconBrandX size={18} />, href: "#twitter" },
        { icon: <IconBrandLinkedin size={18} />, href: "#linkedin" },
        { icon: <IconBrandGithub size={18} />, href: "#github" },
        { icon: <IconBrandYoutube size={18} />, href: "#youtube" },
        { icon: <IconBrandInstagram size={18} />, href: "#instagram" },
        { icon: <IconBrandPinterest size={18} />, href: "#pinterest" },
    ];
    return (
        <div className="flex items-center justify-center gap-4">
            {links.map((lnk, idx) => (
                <a
                    key={idx}
                    href={lnk.href}
                    target="_blank"
                    className="transile rounded-md bg-stone-600 p-1 hover:bg-stone-500"
                >
                    {lnk.icon}
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
