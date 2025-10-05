import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandReddit,
    IconBrandX,
    IconBrandYoutube,
    IconLocation,
    IconMail,
    IconPhone,
} from "@tabler/icons-react";

function ContactInfo() {
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
        {
            icon: <IconBrandFacebook className="size-4" />,
            href: "http://facebook.com/mtayyabrawan",
        },
        {
            icon: <IconBrandInstagram className="size-4" />,
            href: "http://instagram.com/mtayyabrawan",
        },
    ];
    return (
        <div className="flex h-full w-[90%] flex-col items-center justify-center gap-5">
            <h2 className="text-base font-medium">Contact Info</h2>
            <div className="flex w-1/2 items-center justify-start gap-4 text-sm">
                <IconMail className="size-5" />
                <a href="mail:tayyabpasha1918@gmail.com">
                    tayyabpasha1918@gmail.com
                </a>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-4 text-sm">
                <IconPhone className="size-5" />
                <a href="tel:+923141971643">+923141971643</a>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-4 text-sm">
                <IconLocation className="size-5" />
                <p>Attock, Punjab, Pakistan</p>
            </div>
            <div className="flex w-1/2 items-center justify-center gap-4">
                {socialLinks.map((link, idx) => (
                    <a href={link.href} key={idx}>
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className="h-[35%] w-full rounded-md bg-slate-500">
                // TODO: add map here
            </div>
        </div>
    );
}

export default ContactInfo;
