import { Navigation } from "../navigation";

export const Layout = ({children}) => {
    return (
        <div className="page">
            <Navigation />
            <main>{children}</main>
        </div>
    )
}