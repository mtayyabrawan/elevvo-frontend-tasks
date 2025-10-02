import { Outlet } from "react-router";

function BasicLayout() {
    return (
        <div>
            BasicLayout
            <Outlet />
        </div>
    );
}

export default BasicLayout;
