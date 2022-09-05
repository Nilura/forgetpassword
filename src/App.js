import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Forget from "./Forget";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/:idn" element={<Forget />} />
    </Routes>
  );
}
