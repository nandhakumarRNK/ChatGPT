import React, { useState } from "react";
import SideBarContainer from "./components/SideBarContainer";
import ChatBoxContainer from "./components/ChatBoxContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const App = () => {
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello user..! How can I help you?" },
  ]);

  return (
    <div className="App" style={{ width: "100%", display: "flex" }}>
      <ErrorBoundary>
        <SideBarContainer setChatLog={setChatLog} />
        <div className="chatbox" style={{ width: "80%" }}>
          <ChatBoxContainer chatLog={chatLog} setChatLog={setChatLog} />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
