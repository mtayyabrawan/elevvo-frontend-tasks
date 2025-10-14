import { createContext } from "react";

interface Duration {
    from: string;
    to: string;
}

interface Review {
    feedback: string;
    rating: number;
}

interface Client {
    name: string;
    image: string;
}

export interface ProjectType {
    id: number;
    name: string;
    description: string;
    projectBanner: string;
    price: number;
    status: "pending" | "completed" | "cancelled";
    client: Client;
    review?: Review;
    duration: Duration;
}

interface ProjectCtx {
    projects: ProjectType[];
    getOne: (id: number) => ProjectType | undefined;
    updateStatus: (id: number, status: "completed" | "cancelled") => void;
}

const ProjectContext = createContext<ProjectCtx>({
    projects: [],
    getOne: () => undefined,
    updateStatus: () => {},
});

export default ProjectContext;
