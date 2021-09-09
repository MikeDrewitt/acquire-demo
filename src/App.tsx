import React, { useState, useEffect } from "react";

import ContactPage from "./pages/contact.pages";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Normally would be a router */}
      <ContactPage />
    </div>
  );
};

export default App;
