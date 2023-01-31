import React, { useState } from "react";
import SideBarContainer from "./components/SideBarContainer";
import ChatBoxContainer from "./components/ChatBoxContainer";
import "./index.css";
import "./normal.css";

const App = () => {
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello User..! How can I help you?" },
  ]);

  return (
    <div className="App">
      <SideBarContainer setChatLog={setChatLog} />
      <div className="chatbox">
        <ChatBoxContainer chatLog={chatLog} setChatLog={setChatLog} />
      </div>
    </div>
  );
};

export default App;
