import "./Card.css";
import React from "react";
import CardBody from "./CardBody";


function CardChild(props) {
    return (
        <>
            <div className="cards">
                <img className= "cards-img"
                    src={props.image}
                    style={props.css}
                    alt={props.describe}
                />
                <p className="card-body-title">{props.p}</p>
                <p className="card-body-text">{props.text}</p>
                <CardBody text={'About Our Goals What is Lorem Ipsum? Lorem ' +
                'Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
                ' when an unknown printer took a galley of type and scrambled it to ' +
                'make a type specimen book. It has survived not only five centuries,' +
                ' but also the leap into electronic typesetting,' +
                ' remaining essentially unchanged. It was popularised in the ' +
                '1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
                ' and more recently with ' +
                'desktop publishing software like Aldus PageMaker ' +
                'including versions of Lorem Ipsum.'}/>
            </div>
        </>
    )
}

export default CardChild



