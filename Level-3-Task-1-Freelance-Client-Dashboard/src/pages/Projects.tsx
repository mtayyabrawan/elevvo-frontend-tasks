import Project from "../components/Project";
import useProject from "../hooks/useProject";

function Projects() {
    const { projects } = useProject();

    return (
        <div className="h-full w-full space-y-4 p-2 sm:p-4">
            <h1 className="text-center text-base font-medium sm:text-lg">
                Projects
            </h1>
            <div className="grid h-auto w-full grid-cols-1 gap-3 pb-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <Project key={idx} id={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
