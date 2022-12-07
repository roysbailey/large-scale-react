import { Navigation } from "../navigation";

export const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
        </div>
    )
}