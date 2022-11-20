import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Styles/App.css";
function App() {
  return (
    <div className="App">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/*  - Sidebar */}
      {/*  - Feed */}
      {/*  - Widgets */}
    </div>
  );
}

export default App;
