import { Route, Routes } from "react-router";
import DashboardLayout from "../components/ui/DashboardLayout";
import BasicLayout from "../components/ui/BasicLayout";
import DashboardOverview from "../pages/DashboardOverview";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function BasicRoute() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
                <Route path="auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
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
