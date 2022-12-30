import React, { useEffect, useState } from "react";
import InputOptions from "./InputOptions";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { db } from "./FirebaseConfig";

// Styles
import "./Styles/Feed.css";
import "./Styles/InputOptions.css";

// Icons
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "DevanshSK",
      description: "This is a test msg",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); 
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOptions
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#E7A33E"}
          />
          <InputOptions
            Icon={EventNoteIcon}
            title={"Event"}
            color={"#C0CBCD"}
          />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title={"Article"}
            color={"#7FC15E"}
          />
        </div>
      </div>

      {/* Posts */}
      {posts?.map(({id, data: {name, description, message, photoUrl}}) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
      
    </div>
  );
};

export default Feed;
