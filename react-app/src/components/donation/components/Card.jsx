import "./Card.css";
import CardChild from "./CardChild";
import React from "react";
import Title from "../General-Components/Title";


function Card() {
    return (
        <>
            <Title title="Upcoming Projects!"/>
            <div className="card-list">

                    <CardChild
                        image="https://images.unsplash.com/photo-1543335952-4a7f7f006cfc?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        css={{maxWidth: '100%'}} p="Our Upcoming Projects"/>
                    <CardChild
                        image="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?auto=format&fit=crop&q=80&w=1687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        css={{maxWidth: '100%'}} p="Our Upcoming Projects"/>
                    <CardChild
                        image="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        css={{maxWidth: '100%'}} p="Our Upcoming Projects"/>
                    <CardChild
                        image="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80"
                        css={{maxWidth: '100%'}} p="Our Upcoming Projects"/>

            </div>
        </>
)
}

export default Card

