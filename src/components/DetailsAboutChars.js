import {getChars} from "../services/api.service";
import {useEffect, useState} from "react";
import '../components/character-style.css'

export default function DetailsAboutChars({charId}, idi) {
    let [char, setChar] = useState([]);

    useEffect(() => {
        getChars().then(value => setChar(value.data))
    }, [])

    let finded = char.find(value => value.id === Number(charId))





    return (
        <div className={'details-character'}>
            <h2>Id: {finded?.id}</h2>
            <h2>Name: {finded?.name}</h2>
            <h2>URL: {finded?.bio.url}</h2>
            <h2>Born: {finded?.born}</h2>

        </div>


    )
}