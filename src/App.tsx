import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navigation links */}
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      {/* Routes for SignUp and Login */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
