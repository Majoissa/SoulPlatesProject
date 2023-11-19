import React from "react";
import "./UpcomingProject.css";
//import CardChild from "./CardChild";
import Title from "../General-Components/Title";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UpcomingProject() {
    return (
        <>
            <Title title="Upcoming Project" />
            <div className="upcoming-project">
                <Card style={{width: '27rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1543335952-4a7f7f006cfc?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card.Body>
                        <Title>Card Title</Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '27rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?auto=format&fit=crop&q=80&w=1687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>


                <Card style={{width: '27rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>


                <Card style={{width: '27rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default UpcomingProject;

