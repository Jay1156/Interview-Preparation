import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Parts/Midbot.css";
import { useNavigate } from 'react-router-dom';

const Midbot = () => {
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
    <div className="MaxContainer">
      <div className="Container">
        <h2>Ready to level up your interview skills ? </h2>
      </div>
      <div className="Humdered">
        <p>
          Join hundreds of learners getting smarter with every question. Practice
          today, succeed tomorrow
        </p>
      </div>
      <div className="Button">
        <button type="button" className="btn-slide" onClick = {() =>navigate("/Product") } >
    Start Practicing
  </button>
      </div>
    </div>
  </div>

    );
};

export default Midbot;