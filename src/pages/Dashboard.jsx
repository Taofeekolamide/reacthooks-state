import { useState } from "react"

function Dashboard() {

    const [inputValue, setInputValue] = useState("olamide")


    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h1>{inputValue}</h1>
        </>
    )
}

export default Dashboard