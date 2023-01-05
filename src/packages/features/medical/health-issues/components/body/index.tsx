type Props = {
    type: string
}

export const Body = (props:Props) => {
    return (
        <div>
            <b>{props.type} body image here</b>
        </div>
    )
}