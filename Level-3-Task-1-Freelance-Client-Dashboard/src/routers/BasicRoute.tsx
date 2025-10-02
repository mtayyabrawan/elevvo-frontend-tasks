import { Route, Routes } from "react-router";
import DashboardLayout from "../components/ui/DashboardLayout";
import BasicLayout from "../components/ui/BasicLayout";
import DashboardOverview from "../pages/DashboardOverview";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function BasicRoute() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="projects" element={<Projects />} />
                <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default BasicRoute;
