const menuChoices = [
    {
        id: "current",
        label: "Current health issues",
    },
    {
        id: "historic",
        label: "Historic health issues",
    },
    {
        id: "all",
        label: "All health issues",
    }
]

export const DisplayMenu = () => {
    return (
        <ul>
            {menuChoices.map(item => (
                <li key={item.id}>
                    <input type="radio" value={item.id} id={item.id} name="menu-choice" />
                    <label htmlFor={item.id}>{item.label}</label>
                </li>
            ))}
        </ul>
    )
}

