import "./DinamicText.css";

function DinamicText(props){
    return(
        <div className="marquee">
            <span className="marquee__text"
            >{props.text}</span>
      </div>
    )
}

export default DinamicText;