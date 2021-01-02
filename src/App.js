import React from "react";
import "./App.css";

function App() {
  const APP_ID = "364d5953";
  const APP_KEY = "8200aaf03f1b1277860d6080dd883053";
  const exampleReq =
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return ( 
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default App;
