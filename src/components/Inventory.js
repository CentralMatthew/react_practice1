import {useEffect, useState} from "react";
import {getInventory} from "../services/api.service";
import Inv from "./Inv";

export default function Inventory({match: {url}}) {

    let [inventory, setInventory] = useState([]);
    useEffect(() => {
        getInventory().then(value => setInventory(value.data))
    }, [])


    return (
        <div>
            {
                inventory && inventory.map(value => <Inv item={value} url={url}/>)
            }
        </div>

    )
}