import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../components/layout/Layout";
import CoursesPage from "../features/courses/CoursesPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* LOGIN */}
                <Route path="/" element={<Login />} />

                {/* PROTECTED APP */}
                <Route
                    path="/dashboard"
                    element={
                        <Layout>
                            <div>Dashboard Page</div>
                        </Layout>
                    }
                />

                <Route
                    path="/courses"
                    element={
                        <Layout>
                            <CoursesPage />
                        </Layout>
                    }
                />

                {/* fallback */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;