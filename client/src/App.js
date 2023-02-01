import React, { useState } from "react";
import SideBarContainer from "./components/SideBarContainer";
import ChatBoxContainer from "./components/ChatBoxContainer";
import "./index.css";

const App = () => {
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello User..! How can I help you?" },
  ]);

  return (
    <div className="App" style={{ width: "100%", display: "flex" }}>
      <SideBarContainer setChatLog={setChatLog} />
      <div className="chatbox" style={{ width: "80%" }}>
        <div className="headerText">OPENAI - CHATBOT</div>
        <ChatBoxContainer chatLog={chatLog} setChatLog={setChatLog} />
      </div>
    </div>
  );
};

export default App;
