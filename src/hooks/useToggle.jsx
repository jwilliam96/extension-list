import { useState } from "react"

function UseToggle() {

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return [toggle, handleToggle]

}

export default UseToggle