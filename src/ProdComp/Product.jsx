import React, { useState, useEffect } from "react";
import './Product.css'; // external CSS

const Product = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true); // loading state

  // Fetch first question on load
  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line
  }, []);

  // Fetch a new question from your backend
  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/question");
      const data = await res.json();
      setQuestion(data.question);
      setAnswer("");
      setFeedback("");
      setShowFeedback(false);
    } catch (err) {
      console.error("Error fetching question:", err);
    }
    setLoading(false);
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
      <h2>Interview Practice with AI for JS</h2>
      <p className="subtext">Get feedback on every answer you type</p>

      {/* <div className="progress-bar">
        <div className="progress" style={{ width: `${progress * 10}%` }} />
      </div> */}

      <div className="question-section">
        <h5>Question</h5>
        <div className="question-box">
          {loading ? "Loading..." : question}
        </div>
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
        <button onClick={handleSubmit} disabled={loading || !answer.trim()}>
          Submit Answer
        </button>
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

export default Product;