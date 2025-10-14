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
        <div className="relative h-96 w-full rounded-sm bg-slate-300 shadow-[0px_0px_10px_-1px_black] dark:bg-slate-600">
            <p className="absolute top-3 right-0 flex items-center justify-center gap-2 rounded-l-sm bg-zinc-300 px-2 text-sm shadow-[0px_0px_5px_-1px_white] dark:bg-zinc-600 dark:shadow-[0px_0px_5px_-1px_black]">
                {project?.status === "pending" ? (
                    <IconHourglass className="size-4 text-amber-400" />
                ) : project?.status === "cancelled" ? (
                    <IconCancel className="size-4 text-red-400 dark:text-red-500" />
                ) : (
                    <IconCircleCheck className="size-4 text-green-500" />
                )}
                <span>{capitalize(project?.status as string)}</span>
            </p>
            <img
                src={project?.projectBanner}
                alt="project_img"
                className="h-1/2 w-full rounded-sm object-cover"
            />
            <div className="w-full space-y-2 p-2">
                <Link
                    to={`/dashboard/project/${project?.id}`}
                    className="line-clamp-1 w-full text-base font-medium"
                >
                    {project?.name}
                </Link>
                <p className="pl-2 text-right text-sm font-medium">
                    ${project?.price}
                </p>
                <p className="line-clamp-2 text-sm leading-loose">
                    {project?.description}
                </p>
                <div className="flex w-full items-center justify-between px-2">
                    <div className="flex items-center justify-center gap-2 text-xs">
                        <img
                            src={project?.client.image}
                            alt="client_img"
                            className="h-8 w-8 rounded-full object-cover ring-[0.5px]"
                        />
                        <p>{project?.client.name}</p>
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
