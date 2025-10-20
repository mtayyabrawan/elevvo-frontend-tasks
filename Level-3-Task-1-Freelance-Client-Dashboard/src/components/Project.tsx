import {
    IconCancel,
    IconCircleCheck,
    IconHourglass,
} from "@tabler/icons-react";
import useProject from "../hooks/useProject";
import capitalize from "../utility/capitalize";
import Rating from "./ui/Rating";
import { Link } from "react-router";

function Project({ id }: { id: number }) {
    const { getOne } = useProject();
    const project = getOne(id);

    return (
        <div className="relative h-auto w-full rounded-sm bg-slate-300 shadow-[0px_0px_10px_-1px_black] sm:h-96 dark:bg-slate-600">
            <p className="absolute top-3 right-0 flex items-center justify-center gap-2 rounded-l-sm bg-zinc-300 px-2 text-xs shadow-[0px_0px_5px_-1px_white] sm:text-sm dark:bg-zinc-600 dark:shadow-[0px_0px_5px_-1px_black]">
                {project?.status === "pending" ? (
                    <IconHourglass className="size-3 text-amber-400 sm:size-4" />
                ) : project?.status === "cancelled" ? (
                    <IconCancel className="size-3 text-red-400 sm:size-4 dark:text-red-500" />
                ) : (
                    <IconCircleCheck className="size-3 text-green-500 sm:size-4" />
                )}
                <span>{capitalize(project?.status as string)}</span>
            </p>

            <img
                src={project?.projectBanner}
                alt="project_img"
                className="h-40 w-full rounded-sm object-cover sm:h-1/2"
            />

            <div className="w-full space-y-2 p-2 sm:p-3">
                <Link
                    to={`/dashboard/project/${project?.id}`}
                    className="line-clamp-1 w-full text-sm font-medium sm:text-base"
                >
                    {project?.name}
                </Link>

                <p className="pl-2 text-right text-xs font-medium sm:text-sm">
                    ${project?.price}
                </p>

                <p className="line-clamp-2 text-xs leading-loose sm:text-sm">
                    {project?.description}
                </p>

                <div className="flex w-full items-center justify-between px-2">
                    <div className="flex items-center justify-center gap-2 text-xs">
                        <img
                            src={project?.client.image}
                            alt="client_img"
                            className="h-6 w-6 rounded-full object-cover ring-[0.5px] sm:h-8 sm:w-8"
                        />
                        <p className="text-[10px] sm:text-xs">
                            {project?.client.name}
                        </p>
                    </div>
                    {project?.review?.rating && (
                        <Rating rating={project?.review?.rating as number} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
