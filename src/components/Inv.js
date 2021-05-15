import {
    Link
} from "react-router-dom";


export default function Inv({item: {title, category, id},url}) {
    return (
        <div>
            {id} - {title} - {category} - <Link to={url + '/' + id + ''}>Details</Link>
        </div>
    )
}