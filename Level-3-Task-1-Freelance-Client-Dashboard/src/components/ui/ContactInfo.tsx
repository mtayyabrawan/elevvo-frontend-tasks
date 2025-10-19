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
            icon: <IconBrandGithub className="h-5 w-5" />,
            href: "https://github.com/mtayyabrawan",
        },
        {
            icon: <IconBrandLinkedin className="h-5 w-5" />,
            href: "https://linkedin.com/in/mtayyabrawan",
        },
        {
            icon: <IconBrandX className="h-5 w-5" />,
            href: "https://x.com/mtayyabrawan",
        },
        {
            icon: <IconBrandYoutube className="h-5 w-5" />,
            href: "https://youtube.com/@mtayyabrawan",
        },
        {
            icon: <IconBrandReddit className="h-5 w-5" />,
            href: "https://reddit.com/u/mtayyabrawan",
        },
        {
            icon: <IconBrandFacebook className="h-5 w-5" />,
            href: "https://facebook.com/mtayyabrawan",
        },
        {
            icon: <IconBrandInstagram className="h-5 w-5" />,
            href: "https://instagram.com/mtayyabrawan",
        },
    ];
    return (
        <div className="flex w-full flex-col items-center justify-center gap-5 px-4 py-6 md:w-[90%]">
            <h2 className="text-base font-medium">Contact Info</h2>

            <div className="flex w-full max-w-md items-center justify-start gap-4 text-sm">
                <IconMail className="h-5 w-5" />
                <a
                    href="mailto:tayyabpasha1918@gmail.com"
                    className="break-all"
                >
                    tayyabpasha1918@gmail.com
                </a>
            </div>

            <div className="flex w-full max-w-md items-center justify-start gap-4 text-sm">
                <IconPhone className="h-5 w-5" />
                <a href="tel:+923141971643">+92 314 1971643</a>
            </div>

            <div className="flex w-full max-w-md items-center justify-start gap-4 text-sm">
                <IconLocation className="h-5 w-5" />
                <p>Attock, Punjab, Pakistan</p>
            </div>

            <div className="flex w-full max-w-md items-center justify-start gap-3">
                {socialLinks.map((link, idx) => (
                    <a
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            <div className="mt-2 h-40 w-full max-w-md rounded-md bg-slate-500">
                {/* TODO: add map here */}
            </div>
        </div>
    );
}

export default ContactInfo;
