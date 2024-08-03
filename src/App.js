import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );

import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
