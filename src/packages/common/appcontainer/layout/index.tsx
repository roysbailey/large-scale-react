import { Navigation } from "@cc-cp-common/navigation";

export const Layout = ({children}:any) => {
    return (
        <div className="page">
            <Navigation />
            <main>{children}</main>
        </div>
    )
}