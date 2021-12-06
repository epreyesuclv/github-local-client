import React from "react";
import "./styles/App.css";
import Home from "./components/Home";
import NestedEditableDemo from "./components/Tree";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="content/:username/:repo"
          element={<NestedEditableDemo  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
