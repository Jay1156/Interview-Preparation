import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Parts/Uppermid.css";

const steps = [
  {
    title: "1. Choose a Topic",
    text: "Pick from core CS subjects or frontend dev topics.",
  },
  {
    title: "2. Get a Question",
    text: "Real-world technical questions appear, just like in interviews.",
  },
  {
    title: "3. Write your Answer",
    text: "Think, type, and submit your response.",
  },
  {
    title: "4. Get Instant Feedback",
    text: "AI checks your answers and gives detailed suggestions.",
  },
  {
    title: "5. Improve Continuously",
    text: "Retry, improve, and master your weak areas.",
  },
];

const Uppermid = () => {
  return (
    <div className="upper-mid MaxContainer">
      <div className="container text-center">
        <h2 className="section-title">How it Works?</h2>
        <div className="custom-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="card text-bg-dark h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uppermid;
