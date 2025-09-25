import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../components/ui/Layout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
