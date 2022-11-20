import React from "react";
import "./Styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions />
        </div>
      </div>
    </div>
  );
};

export default Feed;