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
        { icon: <IconBrandFacebook size={20} />, href: "#facebook" },
        { icon: <IconBrandX size={20} />, href: "#twitter" },
        { icon: <IconBrandLinkedin size={20} />, href: "#linkedin" },
        { icon: <IconBrandGithub size={20} />, href: "#github" },
        { icon: <IconBrandYoutube size={20} />, href: "#youtube" },
        { icon: <IconBrandInstagram size={20} />, href: "#instagram" },
        { icon: <IconBrandPinterest size={20} />, href: "#pinterest" },
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
