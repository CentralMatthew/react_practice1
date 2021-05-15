import {
    Link
} from "react-router-dom";





export default function Character({item: {name, id, born,},url}) {

    return (
        <div>
            {id} - {name} - {born} - <Link to={url + '/' + id + ''}>Details</Link>
        </div>
    )
}

