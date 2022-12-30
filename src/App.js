import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Styles/App.css";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
