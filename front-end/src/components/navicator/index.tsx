import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Navicator() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const getMenu = async () => {
            const url: string = 'https://apifoxmock.com/m1/4920907-4577933-default/menu'
            const data = await axios.get(url)
            console.log(data)
        }
        getMenu()
    }, [])

    return (
        <div>indexNav</div>
    )
}
