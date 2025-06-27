import React, { useState, useEffect } from "react";
import "./MongoDbDrop.css"; // external CSS

const MongoDbDrop = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0);

  // Fetch first question on load
  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/question?topic=MongoDB");
      const data = await res.json();
      setQuestion(data.question);
      setAnswer("");
      setFeedback("");
      setShowFeedback(false);
    } catch (err) {
      console.error("Error fetching question:", err);
    }
  };

  // Submit the answer to backend for evaluation
  const handleSubmit = async () => {
    if (!answer.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });

      const data = await res.json();
      setFeedback(data.feedback);
      setShowFeedback(true);
      setProgress((prev) => prev + 1);
    } catch (err) {
      console.error("Error submitting answer:", err);
    }
  };

  // Proceed to next question
  const handleNext = () => {
    fetchQuestion();
  };

  return (
    <div className="practice-page">
      <h2>Interview Practice with AI for MongoDB</h2>
      <p className="subtext">Get feedback on every answer you type</p>

      {/* <div className="progress-bar">
        <div className="progress" style={{ width: `${progress * 10}%` }} />
      </div> */}

      <div className="question-section">
        <h5>Question</h5>
        <div className="question-box">{question || "Loading..."}</div>
      </div>

      <div className="answer-section">
        <h5>Your Answer</h5>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />
      </div>

      <div className="button-wrap">
        <button onClick={handleSubmit}>Submit Answer</button>
      </div>

      {showFeedback && (
        <>
          <div className="feedback-section">
            <h5>AI Feedback</h5>
            <div className="feedback-box">{feedback}</div>
          </div>

          <div className="button-wrap">
            <button onClick={handleNext}>Next Question</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MongoDbDrop;
