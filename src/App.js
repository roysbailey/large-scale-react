import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { HealthIssues } from "@cc-cp-features/health-issues"
import { IncidentAnalysis } from "@cc-cp-features/incident-analysis"
import { Layout } from "@cc-cp-common/layout";
import { Dashboard } from "@cc-cp-features/dashboard";
import { CountryDetails } from "@cc-cp-features/country-details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Dashboard /></Layout>,
    },
    {
        path: "/health-issues",
        element: <Layout><HealthIssues /></Layout>,
    },
    {
        path: "/incident-analysis",
        element: <Layout><IncidentAnalysis /></Layout>,
    },
    {
        path: "/country-details",
        element: <Layout><CountryDetails /></Layout>,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App