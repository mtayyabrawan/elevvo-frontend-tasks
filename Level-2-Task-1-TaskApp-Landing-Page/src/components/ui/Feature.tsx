import { type ReactNode } from "@tabler/icons-react";

function Feature({
    icon,
    title,
    description,
    imageSrc,
    position,
}: {
    icon: ReactNode;
    title: string;
    description: string;
    imageSrc: string;
    position: "left" | "right";
}) {
    {
        const positionClasses = {
            left: "flex-col md:flex-row",
            right: "md:flex-row-reverse",
        };
        const animations = {
            left: "fade-right",
            right: "fade-left",
        };
        return (
            <div
                className={`mx-auto flex w-[90%] flex-col md:flex-row ${positionClasses[position]} items-center justify-between`}
            >
                <div
                    className="h-28 w-full md:h-[7rem] md:w-[47%] lg:h-[9.75rem] xl:h-[12rem]"
                    data-aos={
                        position === "left" ? animations.left : animations.right
                    }
                >
                    <img
                        src={imageSrc}
                        alt="image"
                        className="h-full w-full rounded-md object-cover drop-shadow-xs drop-shadow-zinc-600 dark:drop-shadow-zinc-100"
                    />
                </div>
                <div className="hidden h-24 w-[0.5px] bg-black md:flex lg:h-32 xl:h-40 dark:bg-white"></div>
                <div
                    className="flex w-full flex-col justify-center gap-1 p-2 sm:p-4 md:w-[47%] md:gap-2 lg:h-52 xl:h-60 xl:gap-3"
                    data-aos={
                        position === "left" ? animations.right : animations.left
                    }
                >
                    <h3 className="flex items-center justify-start gap-5">
                        {icon}
                        <p className="text-xs font-medium md:text-sm lg:text-base">
                            {title}
                        </p>
                    </h3>
                    <p className="line-clamp-6 text-justify indent-10 text-[0.65rem] leading-loose text-pretty md:line-clamp-4 md:text-xs md:leading-relaxed xl:line-clamp-6 xl:leading-loose">
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Feature;
