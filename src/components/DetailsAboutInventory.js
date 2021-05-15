import {getChars, getInventory} from "../services/api.service";
import {useEffect, useState} from "react";

import '../components/inventory-style.css'

export default function DetailsAboutInventory({inventoryId}) {
    let [inventory, setInvent] = useState([]);

    useEffect(() => {
        getInventory().then(value => setInvent(value.data))
    }, [])

    let findedInvent = inventory.find(value => value.id === Number(inventoryId))

    return (
        <div className={'inventory-details'}>
            <h2>ID: {findedInvent?.id}</h2>
            <h2>Title: {findedInvent?.title}</h2>
            <h2>Category: {findedInvent?.category}</h2>
            <h2>Description: {findedInvent?.description}</h2>
            <h2>Slogan: {findedInvent?.slogan}</h2>
            <h2>Price: {findedInvent?.price}$</h2>
            <h2>Stock: {findedInvent?.stock}</h2>
        </div>


    )
}