import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h2>TV APPS</h2>
        <div className="d-flex">
          <Link to="/Netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              alt="Netflix"
              className="nf"
            />
          </Link>
          <Link to="/HBOmax">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              alt="HBO Max"
              className="hb"
            />
          </Link>
          <Link to="/Hulu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              alt="Hulu"
              className="hu"
            />
          </Link>
          <Link to="/PrimeVideo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              alt="Prime Video"
              className="pr"
            />
          </Link>
        </div>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  const { id } = useParams();

  return (
    <div>
      <h3>
        You Selected: <span>{id}</span>
      </h3>
    </div>
  );
}
