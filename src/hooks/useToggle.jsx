import { useState } from "react"

function UseToggle(initial) {

    const [toggle, setToggle] = useState(initial)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return [toggle, handleToggle]

}

export default UseToggle