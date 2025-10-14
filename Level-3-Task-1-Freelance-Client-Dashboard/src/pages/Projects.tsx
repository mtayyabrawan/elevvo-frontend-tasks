import Project from "../components/Project";
import useProject from "../hooks/useProject";

function Projects() {
    const { projects } = useProject();
    return (
        <div className="h-full w-full space-y-4 p-4">
            <h1 className="text-center text-lg font-medium">Projects</h1>
            <div className="grid h-auto w-full grid-cols-3 gap-4 pb-4">
                {projects.map((project, idx) => (
                    <Project key={idx} id={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
