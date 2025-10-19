import { Route, Routes } from "react-router";
import DashboardLayout from "../components/ui/DashboardLayout";
import BasicLayout from "../components/ui/BasicLayout";
import DashboardOverview from "../pages/DashboardOverview";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Notifications from "../pages/Notifications";
import Project from "../pages/Project";

function BasicRoute() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="projects" element={<Projects />} />
                <Route path="project/:projectId" element={<Project />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notifications />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default BasicRoute;
