import { useState } from "react"

function UseToggleDark() {

    const [dark, setDark] = useState(true)

    const handleDark = () => {
        setDark(!dark)
    }

    return [dark, handleDark]

}

export default UseToggleDark