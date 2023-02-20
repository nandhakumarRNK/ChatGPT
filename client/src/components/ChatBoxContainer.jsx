import React, { useState, useEffect, useRef } from "react";
import ChatContainer from "./ChatContainer";
import sendBtn from "../assets/SVGs/send.svg";

const ChatBoxContainer = ({ chatLog, setChatLog }) => {
  const [userInput, setUserInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newChatLogData = [
      ...chatLog,
      { user: "human", message: `${userInput}` },
    ];

    setUserInput("");
    setChatLog(newChatLogData);

    const messages = newChatLogData
      .map((message) => message.message)
      .join("\n");
    const response = await fetch("https://helpai-chatgpt-clone.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: messages,
      }),
    });
    const data = await response.json();

    setChatLog([
      ...newChatLogData,
      { user: "gpt", message: `${data.message}` },
    ]);
  };

  return (
    <div>
      <div className="chat-log">
        {chatLog.map((item, i) => (
          <ChatContainer key={i} {...item} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-holder" style={{ display: "flex" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="chat-input-textarea"
            placeholder="Ask Me Anthing..."
            required
          ></input>
          <button className="chat-submit-btn">
            <img className="sendBtn" src={sendBtn} alt="sendForm" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBoxContainer;
