import { UserCtx } from "@cc-cp-context/contexts";
import { useContext, useRef } from "react";

export const Dashboard = () => {
    const {userName, setUserName} = useContext(UserCtx)
    const inpValue = useRef("")

    const inputStyle = {
        marginRight: "5px"
    }

    function handleUsernameSubmit() {
        setUserName(inpValue.current.value)
    }

    return (
        <>
            <p>User Name: {userName}</p>
            <h1>Dashboard</h1>
            This would be the main dashboard, where you display relevant CTA's, and provide navigation to features!
            <p>Update User Name:</p>
            <input ref={inpValue} style={inputStyle}></input>
            <button onClick={handleUsernameSubmit}>Submit</button>
        </>
    )
}