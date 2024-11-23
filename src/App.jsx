import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import MainTable from "./components/MainTable";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/members" element={<MainTable />} />
      </Routes>
    </Router>
  );
}

export default App;