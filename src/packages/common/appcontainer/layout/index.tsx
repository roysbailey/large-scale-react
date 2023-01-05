import { Navigation } from "@cc-cp-common/navigation";
import { ReactFragment } from "react";

type Props = React.PropsWithChildren<{}>;

export const Layout = (props:Props) => {
    const {children} = props

    return (
        <div className="page">
            <Navigation />
            <main>{children}</main>
        </div>
    )
}