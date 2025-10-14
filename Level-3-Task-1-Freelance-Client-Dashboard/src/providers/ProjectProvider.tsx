import { useState, type ReactNode } from "react";
import ProjectContext, { type ProjectType } from "../context/ProjectsContext";
import projectsMockData from "../data/projectsMockData";

function ProjectProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<ProjectType[]>(projectsMockData);

    function getOne(id: number): ProjectType | undefined {
        return projects.find((project) => project.id === id);
    }

    function updateStatus(id: number, status: "completed" | "cancelled") {
        setProjects(
            projects.map((project) => {
                if (project.id === id) {
                    project.status = status;
                    return project;
                }
                return project;
            })
        );
    }

    return (
        <ProjectContext.Provider value={{ projects, getOne, updateStatus }}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider;
