import { useState } from "react"

function ToggleDark() {

    const [dark, setDark] = useState(true)

    const handleDark = () => {
        setDark(!dark)
    }

    return [dark, handleDark]

}

export default ToggleDark