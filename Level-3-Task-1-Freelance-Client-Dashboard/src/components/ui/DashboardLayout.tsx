import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BaseLayout from "./common/BaseLayout";
import useAuth from "../../hooks/useAuth";
import Loader from "./Loader";
import NotificationProvider from "../../providers/NotificationProvider";
import ProjectProvider from "../../providers/ProjectProvider";

function DashboardLayout() {
    const navigator = useNavigate();
    const { loggedIn } = useAuth();

    if (loggedIn === true)
        return (
            <BaseLayout height="screen">
                <NotificationProvider>
                    <ProjectProvider>
                        <Header />
                        <div className="flex h-[calc(100vh-3rem)] w-full flex-col md:flex-row">
                            <Sidebar />
                            <main className="scrollbar-custom h-full flex-1 overflow-y-auto">
                                <Outlet />
                            </main>
                        </div>
                    </ProjectProvider>
                </NotificationProvider>
            </BaseLayout>
        );
    else if (loggedIn === "pending") return <Loader />;
    else {
        navigator("/");
    }
}

export default DashboardLayout;
