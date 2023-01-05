import { UserCtx } from "@cc-cp-context/contexts";
import { useContext } from "react";

export const IncidentAnalysis = () => {
    const {userName} = useContext(UserCtx);

    return (
        <>
            <p>User Name: {userName}</p>
            <h2>Incident analysis</h2>
            This is a page for incident analysis!  Be much better when we have finished it!
        </>
    )
}