import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { differenceInDays } from "date-fns";
import useProject from "../hooks/useProject";
import type { ProjectType } from "../context/ProjectsContext";
import Rating from "../components/ui/Rating";
import {
    IconCancel,
    IconCircleCheck,
    IconHourglass,
} from "@tabler/icons-react";
import capitalize from "../utility/capitalize";

function Project() {
    const { projectId } = useParams();
    const { getOne, updateStatus } = useProject();
    const navigator = useNavigate();

    const [project, setProject] = useState<ProjectType>({
        name: "",
        description: "",
        duration: { from: "", to: "" },
        id: 0,
        price: 0,
        projectBanner: "",
        status: "pending",
        client: { image: "", name: "" },
    });

    useEffect(() => {
        if (!getOne(parseInt(projectId!))) {
            navigator("/dashboard/projects");
        } else {
            setProject(getOne(parseInt(projectId!)) as ProjectType);
        }
        return;
    }, []);

    return (
        <div className="h-full w-full space-y-4 p-2 sm:space-y-6 sm:p-3">
            <h1 className="text-center text-base font-medium sm:text-lg">
                {project.name}
            </h1>

            <img
                src={project.projectBanner}
                alt={project.name}
                className="mx-auto block h-48 w-full rounded-sm object-cover shadow-[0px_0px_10px_-1px_black] sm:h-96 sm:w-[80%]"
            />

            <p className="mx-auto flex w-fit items-center justify-center gap-2 rounded-sm bg-zinc-300 px-2 text-xs shadow-[0px_0px_5px_-1px_white] sm:text-sm dark:bg-zinc-600 dark:shadow-[0px_0px_5px_-1px_black]">
                {project?.status === "pending" ? (
                    <IconHourglass className="size-3 text-amber-400 sm:size-4" />
                ) : project?.status === "cancelled" ? (
                    <IconCancel className="size-3 text-red-400 sm:size-4 dark:text-red-500" />
                ) : (
                    <IconCircleCheck className="size-3 text-green-500 sm:size-4" />
                )}
                <span>{capitalize(project?.status as string)}</span>
            </p>

            <div className="mx-auto flex w-full items-center justify-between px-4 text-xs font-medium sm:w-[70%] sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                    <img
                        src={project?.client.image}
                        alt="client_img"
                        className="h-6 w-6 rounded-full object-cover ring-[0.5px] sm:h-8 sm:w-8"
                    />
                    <p>{project?.client.name}</p>
                </div>
                <div>${project.price}</div>
            </div>

            <p className="mx-auto w-full px-4 text-justify text-sm leading-loose text-pretty sm:w-[90%]">
                {project.description}
            </p>

            {project.review && (
                <div className="mx-auto w-full space-y-3 px-4 pb-4 sm:w-[70%] sm:space-y-4">
                    <h2 className="text-center text-sm font-medium sm:text-base">
                        Client Review
                    </h2>
                    <p className="w-full text-center text-xs text-pretty sm:text-sm">
                        {project.review?.feedback}
                    </p>
                    <div className="flex justify-center">
                        <Rating rating={project.review?.rating as number} />
                    </div>
                </div>
            )}

            <div className="mx-auto w-full space-y-3 px-4 pb-4 sm:w-[70%] sm:space-y-4">
                <h2 className="text-center text-sm font-medium sm:text-base">
                    Duration
                </h2>
                <div className="flex flex-col items-start justify-start gap-2 text-xs sm:flex-row sm:items-center sm:gap-4 sm:text-sm">
                    <p>
                        From: {new Date(project.duration.from).toDateString()}
                    </p>
                    <p>To: {new Date(project.duration.to).toDateString()}</p>
                    <p className="font-medium">
                        (
                        {differenceInDays(
                            project.duration.to,
                            project.duration.from
                        )}{" "}
                        Days)
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full flex-col gap-2 px-4 pb-4 sm:w-[70%] sm:flex-row sm:gap-4">
                {project.status === "pending" && (
                    <>
                        <button
                            onClick={() =>
                                updateStatus(project.id, "completed")
                            }
                            className="w-full cursor-pointer rounded-sm bg-green-500 p-2 text-xs font-medium hover:bg-green-600 focus-visible:outline-hidden sm:w-auto"
                        >
                            Mark as Completed
                        </button>
                        <button
                            onClick={() =>
                                updateStatus(project.id, "cancelled")
                            }
                            className="w-full cursor-pointer rounded-sm bg-red-500 p-2 text-xs font-medium hover:bg-red-600 focus-visible:outline-hidden sm:w-auto"
                        >
                            Cancel Now
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Project;
