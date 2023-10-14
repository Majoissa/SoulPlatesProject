import React from "react";
import NgoStories from "./NgoStories";
import "./NgoStory.css";

function NgoStory() {
  const stories = [
    {
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fngostories.in%2F&psig=AOvVaw058DvSULahoRDNj4O90e74&ust=1697322819064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCfs6-K9IEDFQAAAAAdAAAAABAE.jpg",
      title: "Story 1",
      description: "Description for Story 1.",
    },
    {
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fngostories.in%2F&psig=AOvVaw058DvSULahoRDNj4O90e74&ust=1697322819064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCfs6-K9IEDFQAAAAAdAAAAABAE.jpg",
      title: "Story 2",
      description: "Description for Story 2.",
    },
  ];
  return (
    <div className="box">
      {stories.map((story, index) => (
        <NgoStories
          key={index}
          imageStory={story.imageSrc}
          titleStory={story.title}
          descriptionStory={story.description}
        />
      ))}
    </div>
  );
}

export default NgoStory;