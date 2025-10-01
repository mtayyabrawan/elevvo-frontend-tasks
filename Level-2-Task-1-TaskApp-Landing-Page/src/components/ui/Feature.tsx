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
            left: "flex-row",
            right: "flex-row-reverse",
        };
        return (
            <div
                className={`mx-auto flex w-[90%] ${positionClasses[position]} items-center justify-between`}
            >
                <div className="h-[12rem] w-[47%]">
                    <img
                        src={imageSrc}
                        alt="image"
                        className="h-full w-full rounded-md object-cover drop-shadow-xs drop-shadow-zinc-600 dark:drop-shadow-zinc-100"
                    />
                </div>
                <div className="h-40 w-[0.5px] bg-black dark:bg-white"></div>
                <div className="flex h-60 w-[47%] flex-col gap-3 p-4">
                    <h3 className="flex items-center justify-start gap-5">
                        {icon}
                        <p className="font-medium">{title}</p>
                    </h3>
                    <p className="line-clamp-6 text-justify indent-10 text-xs leading-loose text-pretty">
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Feature;
