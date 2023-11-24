/*import React from "react";
import {useState} from "react";
import "./UpcomingProject.css";
import Title from "../General-Components/Title";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function UpcomingProject() {

    const [isExpanded, setIsExpanded] = useState(false); // State variable to control text length


    const longText1 = "In the world of childhood, toys are more than just objects of amusement. " +
            "They are tools for learning, exploration, and self-expression, playing a vital role in a child's development." +
            " For children in underserved communities, toys can be a " +
            "beacon of hope, offering a sense of joy, comfort, and empowerment. Conclusion\n" +
        "\n" +
        "Toys are not just playthings; they are powerful tools that can transform the lives of children." +
        " By providing children with toys, we can help them to learn, grow, and thrive.Let us all play a role in" +
        " making sure that every child has the opportunity to experience the joy and wonder of play."

    const shortText1 = "By providing children with toys, we can help them to develop the skills and resilience " +
            "they need to thrive. Toys can be a powerful force for good in the lives of children," +
            " especially those who are most vulnerable.";


    const longText2 = "The Empowering Women through Education and Entrepreneurship project is a transformative initiative " +
        "that will empower women to achieve their full potential and contribute to the development of " +
        "their communities. By investing in women's education and entrepreneurship, we can create a more just," +
        " equitable,    and prosperous world for all."

    const shortText2 = "The Empowering Women through Education and Entrepreneurship project is expected to " +
        "have a significant positive impact on the lives of women by:";

    const longText3 = "Education is the cornerstone of a just and equitable society. However, disparities in access to quality'\n" +
        "            education persist, widening the gap between advantaged and disadvantaged children. The 'Bridging the\n" +
        "            Educational Divide' project aims to address these disparities and ensure that all children, regardless\n" +
        "             of their background or circumstances, have the opportunity to reach their full potential through\n" +
        "             education."
    const shortText3 = "Bridging the Educational Divide: " +
                    "A Comprehensive Approach to Equal Education for All Children"


    const longText4 = "Each child deserves to experience the joys and wonder of childhood, " +
        "free from the burdens of discrimination, poverty, and violence. However, not all children are " +
        "afforded the same opportunities to thrive. Around the world, millions of children face obstacles that prevent " +
        "them from fully enjoying their childhood and reaching their full potential."

    const shortText4 = "This article is about every child’s right to live an equal childhood, " +
        "highlighting the importance of providing every child with the opportunities they need to grow and develop.";


    const handleToggleReadMore = () => {
        setIsExpanded(!isExpanded); // Toggle the state variable
    };

    return (
        <>
            <Title title="Upcoming Project"/>
            <div className="upcoming-project">
                <Card style={{width: '30rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1543335952-4a7f7f006cfc?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card.Body >
                        <Card.Title>Equal Childhood for every kids</Card.Title>
                        <Card.Text>
                            <div>
                                {isExpanded ? <p>{longText1}</p> : <p>{shortText1}</p>}
                                <Button onClick={handleToggleReadMore}>
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{width: '30rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?auto=format&fit=crop&q=80&w=1687&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card.Body style={{padding: '30px'}}>
                        <Card.Title>Women Reality</Card.Title>
                        <Card.Text>
                            <div>
                                {isExpanded ? <p>{longText2}</p> : <p>{shortText2}</p>}
                                <Button onClick={handleToggleReadMore}>
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{width: '30rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    />
                    <Card.Body style={{padding: '30px'}}>
                        <Card.Title>Kids Education</Card.Title>
                        <Card.Text>
                            <div>
                                {isExpanded ? <p>{longText3}</p> : <p>{shortText3}</p>}
                                <Button onClick={handleToggleReadMore}>
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{width: '30rem'}}>
                    <Card.Img variant="top"
                              src="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80"
                    />
                    <Card.Body style={{padding: '30px'}}>
                        <Card.Title>Kids Life Reality</Card.Title>
                        <div>
                            {isExpanded ? <p>{longText4}</p> : <p>{shortText4}</p>}
                            <Button onClick={handleToggleReadMore}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default UpcomingProject;*/


import React, {useState} from "react";
import {useCollapse} from 'react-collapsed';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./UpcomingProject.css";




const UpcomingProject = ({item}) => {
    const [isExpanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({
        isExpanded
    });
    return (
        <>
            <Card className="card" style={{width: '30rem'}}>
                <Card.Img variant="top" src={item.Img} alt=""/>
                <Card.Body >

                        <h2>{item.heading}</h2>
                        <p className="card-text">{item.shortText}</p>
                        <p className="card-text" {...getCollapseProps()}>{item.longText}</p>
                        <Button {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) =>
                                !prevExpanded)
                        })} >
                            {isExpanded ? "Read Less" : "Read More"}
                        </Button>

                </Card.Body>
            </Card>
        </>
    )
}

export default UpcomingProject;