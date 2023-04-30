import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./Layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;