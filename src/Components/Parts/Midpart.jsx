import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Parts/Midpart.css";
import img from "../Images/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png"

const Midpart = () => {
    return(
<>
  <div className="MaxContainer">
    <div className="Container">
      <h2>Features</h2>
    </div>
    <div className="FeaturesWithImage">
      <div className="FeaturesList">
        <div className="F1">
          <h4>Feature 1 - Practice Questions</h4>
          <p>
            Practice technical interview questions across topics like React,
            Javascript, DBMS, OS, and more. Improve your answer with each attempt.
          </p>
        </div>
        <div className="F2">
          <h4>Feature 2 - Smart AI Evaluation</h4>
          <p>
            Receive personalized feedback on your answers using powerful AI.
            Understand your mistakes and learn how to improve - instantly.
          </p>
        </div>
        <div className="F3">
          <h4>Feature 3 - Track your progress</h4>
          <p>
            Visualize your learning, Track scores, monitor improvements, and review
            past answers to build consistent and confidence
          </p>
        </div>
        <div className="F4">
          <h4>Feature 4 - Learn by writing</h4>
          <p>
            Forget multiple choice. This platform encourages you to think and write
            - just like in real interviews. Train your brain for actual scenarios
          </p>
        </div>
      </div>
      <div className="FeaturesImage">
        <img src={img} alt="Features" />
      </div>
    </div>
  </div>
</>
    );
};

export default Midpart;