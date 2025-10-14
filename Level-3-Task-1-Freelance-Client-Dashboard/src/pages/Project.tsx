/* eslint-disable react-hooks/exhaustive-deps */
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
        <div className="h-full w-full space-y-6 p-3">
            <h1 className="text-center text-lg font-medium">{project.name}</h1>
            <img
                src={project.projectBanner}
                alt={project.name}
                className="mx-auto block h-96 w-[80%] rounded-sm object-cover shadow-[0px_0px_10px_-1px_black]"
            />
            <p className="mx-auto flex w-fit items-center justify-center gap-2 rounded-sm bg-zinc-300 px-2 text-sm shadow-[0px_0px_5px_-1px_white] dark:bg-zinc-600 dark:shadow-[0px_0px_5px_-1px_black]">
                {project?.status === "pending" ? (
                    <IconHourglass className="size-4 text-amber-400" />
                ) : project?.status === "cancelled" ? (
                    <IconCancel className="size-4 text-red-400 dark:text-red-500" />
                ) : (
                    <IconCircleCheck className="size-4 text-green-500" />
                )}
                <span>{capitalize(project?.status as string)}</span>
            </p>
            <div className="mx-auto flex w-[70%] items-center justify-between text-sm font-medium">
                <div className="flex items-center justify-center gap-2">
                    <img
                        src={project?.client.image}
                        alt="client_img"
                        className="h-8 w-8 rounded-full object-cover ring-[0.5px]"
                    />
                    <p>{project?.client.name}</p>
                </div>
                <div>${project.price}</div>
            </div>
            <p className="mx-auto w-[90%] text-justify leading-loose text-pretty">
                {project.description}
            </p>
            {project.review && (
                <div className="mx-auto w-[70%] space-y-4 pb-4">
                    <h2 className="text-center text-base font-medium">
                        Client Review
                    </h2>
                    <p className="w-full text-center text-pretty">
                        {project.review?.feedback}
                    </p>
                    <Rating rating={project.review?.rating as number} />
                </div>
            )}
            <div className="mx-auto w-[70%] space-y-4 pb-4">
                <h2 className="text-center text-base font-medium">Duration</h2>
                <div className="flex items-center justify-start gap-4">
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
            <div className="mx-auto w-[70%] space-x-4 pb-4">
                {project.status === "pending" && (
                    <>
                        <button
                            onClick={() =>
                                updateStatus(project.id, "completed")
                            }
                            className="cursor-pointer rounded-sm bg-green-500 p-2 text-xs font-medium focus-visible:outline-hidden"
                        >
                            Mark as Completed
                        </button>
                        <button
                            onClick={() =>
                                updateStatus(project.id, "cancelled")
                            }
                            className="cursor-pointer rounded-sm bg-red-500 p-2 text-xs font-medium focus-visible:outline-hidden"
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
