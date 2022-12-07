import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { HealthIssues } from "@care-plan/health-issues"
import { IncidentAnalysis } from "@care-plan/incident-analysis"
import { Home } from "./pages/Home";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/health-issues",
        element: <Layout><HealthIssues /></Layout>,
    },
    {
        path: "/incident-analysis",
        element: <Layout><IncidentAnalysis /></Layout>,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App