import { useState, useEffect } from "react"
import listExtensions from "../../data.json"

export default function UseFetch(listActive) {
    const [items, setItems] = useState(listExtensions) // 🔹 lista principal
    const [filterList, setFilterList] = useState(listExtensions)

    useEffect(() => {
        if (listActive === "Active") {
            setFilterList(items.filter((list) => list.isActive))
            return
        }
        if (listActive === "Inactive") {
            setFilterList(items.filter((list) => !list.isActive))
            return
        }
        setFilterList(items)
    }, [listActive, items])

    // UPDATE
    const updateListState = (name) => {
        setItems((prev) =>
            prev.map((item) =>
                item.name === name ? { ...item, isActive: !item.isActive } : item
            )
        )
    }

    // Eliminar item
    const removeItem = (name) => {
        setItems((prev) => prev.filter((item) => item.name !== name))
    }

    return { filterList, updateListState, removeItem }
}
