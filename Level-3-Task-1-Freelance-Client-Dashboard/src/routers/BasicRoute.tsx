import { Route, Routes } from "react-router";
import DashboardLayout from "../components/ui/DashboardLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

function BasicRoute() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default BasicRoute;
