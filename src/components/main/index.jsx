import React from "react";
import "../../assets/fonts/joystix.ttf";

const data = [
  {
    title: "We will strive to give you the real insights on kz market",
    emoji: "🇰🇿",
  },
  {
    title:
      "We will strive to provide you with the most productive environment in your life",
    emoji: "🎯",
  },
  {
    title:
      "We will strive to help you become coding gurus && software engineering jedis",
    emoji: "🔥",
  },
  {
    title:
      "We will strive to make a proactive and versatile person with a diversity of soft skills",
    emoji: "📣",
  },
];

export const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <h1>Hello, Turing!</h1>
          <h3>Building Progressive Community</h3>
        </div>
        <div className="main-list">
          {data.map((item) => (
            <div className="main-list-item">
              <div className="main-list-item-emoji">{item.emoji}</div>
              <h3 className="main-list-item-title">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="main-form">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAK72aTAqXNq5PHiHo1rteIeL3fg8MG1VNkf0jFNqPpSNg2A/viewform"
          >
            <button>Apply now 🎉</button>
          </a>
        </div>
      </div>
    </>
  );
};
