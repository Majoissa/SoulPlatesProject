import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./SocialMedia.css";

function SocialMedia(){
    return(
        <div className="socialMedias">
            <div><FontAwesomeIcon  className="iconSocial" icon={faMapLocationDot} /></div>
            <div><FontAwesomeIcon className="iconSocial" icon={faEnvelope} /></div>
            <div><FontAwesomeIcon className="iconSocial" icon={faPhoneVolume} /></div>
        </div>
    )
}

export default SocialMedia;