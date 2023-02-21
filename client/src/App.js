import React, { useState } from "react";
import SideBarContainer from "./components/SideBarContainer";
import ChatBoxContainer from "./components/ChatBoxContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import ErrorHomeContainer from "./components/ErrorHomeContainer";

const App = () => {
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello user..! How can I help you?" },
  ]);

  return (
    <>
      {/* <ErrorBoundary>
        <SideBarContainer setChatLog={setChatLog} />
        <div className="chatbox" style={{ width: "80%" }}>
          <ChatBoxContainer chatLog={chatLog} setChatLog={setChatLog} />
        </div>
      </ErrorBoundary> */}
      <ErrorHomeContainer/>
    </>
  );
};

export default App;
