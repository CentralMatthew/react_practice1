import {useEffect, useState} from "react";
import {getChars} from "../services/api.service";
import Character from "./Character";
import DetailsAboutChars from "./DetailsAboutChars";

export default function Characters({match: {url}}) {
    let [chars, setCharacter] = useState([])

    useEffect(() => {
        getChars().then(value => setCharacter(value.data))
    }, [])


    return (
        <div>
            {
                chars && chars.map(value => <Character key={value.id} item={value} url={url}/>)
            }
        </div>
    );


}