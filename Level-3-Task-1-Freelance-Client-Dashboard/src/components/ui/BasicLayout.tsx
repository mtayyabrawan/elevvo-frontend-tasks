import { Outlet } from "react-router";
import BaseLayout from "./common/BaseLayout";
import Navbar from "./common/Navbar";

function BasicLayout() {
    return (
        <BaseLayout>
            <Navbar />
            <Outlet />
        </BaseLayout>
    );
}

export default BasicLayout;
