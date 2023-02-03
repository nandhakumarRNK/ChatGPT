import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import bot from "../assets/SVGs/bot.svg";
import human from "../assets/SVGs/user.svg";

const ChatMessage = ({ message, user }) => {
  return (
    <div>
      <div className="chat-message" id={user === "gpt" ? "chatBotInputDivStyle" : "userInputDivStyle"}>
        <div className="avatar" style={{ background: user === "gpt" ? "#0da37f" : "#71059b" }}>
           <img src={user === "gpt" ? bot : human} alt={user === "gpt" ? "bot" : "human"} />
        </div>
        <div className="message">
          {user === "gpt" && (
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                fontSynthesis: "none",
              }}
              startDelay={100}
              cursorColor="black"
              text={message}
              typeSpeed={20}
              eraseSpeed={100}
              hideCursorAfterText="true"
            />
          )}
          {<div className="message">{user === "human" && message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
