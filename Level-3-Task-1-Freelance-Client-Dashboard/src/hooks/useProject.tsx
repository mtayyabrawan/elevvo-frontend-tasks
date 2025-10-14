import { useContext } from "react";
import ProjectContext from "../context/ProjectsContext";

function useProject() {
    return useContext(ProjectContext);
}

export default useProject;
