import { useState } from "react"

const UseLists = () => {

    const [listActive, setListActive] = useState("All")

    const handleList = (list) => {
        setListActive(list)
    }

    return [listActive, handleList]

}

export default UseLists