import React, { useState } from "react";
import SideBarContainer from "./components/SideBarContainer";
import ChatBoxContainer from "./components/ChatBoxContainer";
import "./index.css";
import theme from "./themeChange.svg";


const App = () => {
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello User..! How can I help you?" },
  ]);

  return (
    <div className="App" style={{ width: "100%", display: "flex" }}>
      <SideBarContainer setChatLog={setChatLog} />
      <div className="chatbox" style={{ width: "80%" }}>
        <div className="headerText">
          <span>
            <img src={theme} style={{ width: "7%" }} alt="bot" />{" "}
          </span>
          <div>CHATBOT - OPENAI</div>
        </div>
        <ChatBoxContainer chatLog={chatLog} setChatLog={setChatLog} />
      </div>
    </div>
  );
};

export default App;
