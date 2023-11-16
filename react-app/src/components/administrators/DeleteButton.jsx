import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Edit.css";

function DeleteButton({ onClick, id }){
    return (
        <div>
            <button className="editBtn" title="Delete user" onClick={() => onClick(id)}>
            <FontAwesomeIcon className="deleteIcon" icon={faTrash}/>
            </button>
        </div>
    )
}

export default DeleteButton;