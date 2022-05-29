import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="mail" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
