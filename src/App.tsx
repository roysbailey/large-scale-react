import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HealthIssues } from "@cc-cp-features/health-issues"
import { IncidentAnalysis } from "@cc-cp-features/incident-analysis"
import { Layout } from "@cc-cp-common/layout";
import { Dashboard } from "@cc-cp-features/dashboard";
import { CountryDetails } from "@cc-cp-features/country-details";
import { CountryCtx, UserCtx } from "@cc-cp-context/contexts";
import { useEffect, useState } from "react";

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
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(function() {
        setUserName("Silvertouch");
    }, [])

    return (
        <UserCtx.Provider value={{ userName, setUserName }}>
            <CountryCtx.Provider value={{ selectedCountryCode, setSelectedCountryCode }}>
                <RouterProvider router={router} />
            </CountryCtx.Provider>
        </UserCtx.Provider>
    )
}

export default App