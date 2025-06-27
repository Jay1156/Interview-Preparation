import React from "react";
import '../Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    

      <nav className="Navbar">
        <div className="Logo">
          <span className="LogoInterview">Interview</span>
          <span className="LogoPrep">Prep</span>
        </div>
        <div className="NavLinks">
          <div className="Home">
            <Link to ="/">Home</Link>
          </div>
          <div className="Products">
            <Link to ="/Product">Practice</Link>
          </div>
        </div>

        <div className="Dropdown">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Topics
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Topics/ReactDrop">React</Link></li>
            <li><Link className="dropdown-item" to="/Topics/NodejsDrop">Node.JS</Link></li>
            <li><Link className="dropdown-item" to="/Topics/ExpressjsDrop">Express.JS</Link></li>
            <li><Link className="dropdown-item" to="/Topics/MongoDbDrop">MongoDB</Link></li>

          </ul>
        </li>
        </div>

         <div className="Dropdown">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Q&A Bank
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/QaABank/JavasBank">JavaScript</Link></li>
            <li><Link className="dropdown-item" to="/">React</Link></li>
            <li><Link className="dropdown-item" to="/">Node.JS</Link></li>
            <li><Link className="dropdown-item" to="/">Express.JS</Link></li>
            <li><Link className="dropdown-item" to="/">MongoDB</Link></li>

          </ul>
        </li>
        </div>

      </nav>
    
  );
};

export default Navbar;
