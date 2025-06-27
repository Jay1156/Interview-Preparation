import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Parts/Upperpart.css'; 
import { useNavigate } from "react-router-dom";

const Upperpart = () => {
  const navigate = useNavigate();
    return (
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
    crossOrigin="anonymous"
  />
  <div className="UpperpartContainer">

  <div className="Container">
    <h2>Tech - Interviewer with AI - Powered Feedback</h2>
    <p>
      “Practice real questions. Get instant, personalized feedback. Improve
      every day.”
    </p>
  </div>
  <div className="Button">
    <div className="Button">
  <button type="button" className="btn-slide" onClick = {() => navigate("/Product")}>
    Start Practicing
  </button>
</div>
  </div>
</div>
        </div>

    )
}
export default Upperpart;