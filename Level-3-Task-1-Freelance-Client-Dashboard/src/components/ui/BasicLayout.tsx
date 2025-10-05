import { Outlet } from "react-router";
import BaseLayout from "./common/BaseLayout";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function BasicLayout() {
    return (
        <BaseLayout height="auto">
            <Navbar />
            <div className="flex min-h-[calc(100vh-8rem)] w-full">
                <Outlet />
            </div>
            <Footer />
        </BaseLayout>
    );
}

export default BasicLayout;
