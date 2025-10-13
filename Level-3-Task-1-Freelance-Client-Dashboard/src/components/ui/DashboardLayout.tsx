import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BaseLayout from "./common/BaseLayout";
import useAuth from "../../hooks/useAuth";
import Loader from "./Loader";
import NotificationProvider from "../../providers/NotificationProvider";

function DashboardLayout() {
    const navigator = useNavigate();
    const { loggedIn } = useAuth();
    if (loggedIn === true)
        return (
            <BaseLayout height="screen">
                <NotificationProvider>
                    <Header />
                    <div className="flex h-[calc(100vh-3rem)] w-full">
                        <Sidebar />
                        <main className="scrollbar-custom h-full w-[85%] overflow-y-auto">
                            <Outlet />
                        </main>
                    </div>
                </NotificationProvider>
            </BaseLayout>
        );
    else if (loggedIn === "pending") return <Loader />;
    else {
        navigator("/");
    }
}

export default DashboardLayout;
