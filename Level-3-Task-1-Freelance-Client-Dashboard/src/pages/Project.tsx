import { useParams } from "react-router";

function Project() {
    const { projectId } = useParams();
    return <div>{projectId}</div>;
}

export default Project;
