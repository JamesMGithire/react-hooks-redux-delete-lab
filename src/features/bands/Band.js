import { useDispatch } from "react-redux"
import { bandRemoved } from "./bandsSlice";

export default function Band({band}){
    const dispatch = useDispatch();

    function handleDelete(){
        dispatch(bandRemoved(band));
    }
    return(
    <li>{band.name}
        <button onClick={handleDelete}>Delete Band</button>
    </li>
    )
}