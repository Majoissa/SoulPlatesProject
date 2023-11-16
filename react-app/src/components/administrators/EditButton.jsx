import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import "./Edit.css";

function EditButton({ onClick }){
    return (
        <div>
            <button className="editBtn" title="Edit user" onClick={onClick}>
            <FontAwesomeIcon className="penIcon" icon={faPenSquare}/>
            </button>
        </div>
    )
}

export default EditButton;