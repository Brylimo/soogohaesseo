import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./routes/Calendar";
import Layout from "./Layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Calendar/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;