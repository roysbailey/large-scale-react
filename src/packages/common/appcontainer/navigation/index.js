import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link> </li>
                <li><Link to="/health-issues">Health issues</Link> </li>
                <li><Link to="/incident-analysis">Incident analysis</Link> </li>
            </ul>
        </nav>
    )
}