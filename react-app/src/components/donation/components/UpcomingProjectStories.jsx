import React from "react";
import "./UpcomingProject.css";
import Title from "../General-Components/Title";
import UpcomingProject from "../components/UpcomingProject";

const data = [
    {
        Img: "https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heading: "Equal Childhood for every kids",

        shortText:
            "By providing children with toys, we can help them to develop the skills and resilience " +
            "they need to thrive. Toys can be a powerful force for good in the lives of children," +
            "especially those who are most vulnerable.",

        longText:
            "In the world of childhood, toys are more than just objects of amusement. " +
            "They are tools for learning, exploration, and self-expression, playing a vital role in a child's development." +
            " For children in underserved communities, toys can be a " +
            "beacon of hope, offering a sense of joy, comfort, and empowerment. Conclusion\n" +
            "\n" +
            "Toys are not just playthings; they are powerful tools that can transform the lives of children." +
            " By providing children with toys, we can help them to learn, grow, and thrive.Let us all play a role in" +
            " making sure that every child has the opportunity to experience the joy and wonder of play.",
    },

    {
        Img: "https://images.unsplash.com/photo-1509099706869-4da3cbb7a0fc?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heading: "Women Reality",
        shortText:
            "Women play an integral role in the society. They are the backbone of families and are crucial to the growth and development of communities." +
            "The Empowering Women through Education and Entrepreneurship project is expected to " +
            "have a significant positive impact on the lives of women by:",

        longText: "The Empowering Women through Education and Entrepreneurship project is expected to " +
            "have a significant positive impact on the lives of women by:"+
            "The Empowering Women through Education and Entrepreneurship project is a transformative initiative " +
            "that will empower women to achieve their full potential and contribute to the development of " +
            "their communities. By investing in women's education and entrepreneurship, we can create a more just," +
            " equitable,and prosperous world for all.",
    },

    {
        Img: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Kids Education",
        shortText: "Bridging the Educational Divide: " +
            "A Comprehensive Approach to Equal Education for All Children",

        longText: "Education is the cornerstone of a just and equitable society. However, disparities in access to quality'\n" +
            "education persist, widening the gap between advantaged and disadvantaged children. The 'Bridging the\n" +
            "Educational Divide' project aims to address these disparities and ensure that all children, regardless\n" +
            "of their background or circumstances, have the opportunity to reach their full potential through\n" +
            "education.",
    },

    {
        Img: "https://images.unsplash.com/photo-1635929114944-8bab23b98e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80",
        heading: "Kids Life Reality",

        shortText: "This article is about every child’s right to live an equal childhood, " +
            "highlighting the importance of providing every child with the " +
            "opportunities they need to grow and develop.",

        longText: "Each child deserves to experience the joys and wonder of childhood, " +
            "free from the burdens of discrimination, poverty, and violence. However, not all children are " +
            "afforded the same opportunities to thrive. Around the world, millions of children face obstacles that prevent " +
            "them from fully enjoying their childhood and reaching their full potential.",
    }
]


function UpcomingProjectStories() {
    return (
        <>
            <Title title="Upcoming Project"/>
            <secttion className="upcoming-project-section">
                {data.map((item, index) => {
                    return <UpcomingProject key={index} item={item}/>;
                })}
            </secttion>
        </>
    )

}


export default UpcomingProjectStories

