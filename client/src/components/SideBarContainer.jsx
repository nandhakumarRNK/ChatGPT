import React from "react";
import theme from "../mainHeaderLogo.svg";
import github from "../assets/SVGs/github.svg";

const SideBarContainer = ({ setChatLog }) => {
  const clearChat = () => {
    // setChatLog([{ user: "gpt", message: "Welcome again...!" }]);
    setChatLog([]);
    window.location.reload(false);
  };
  // const changeThemeFunction = () => {
  //   var element = document.getElementById("sideMenu");
  //   var btn = document.getElementsByClassName("side-menu-button");
  //   console.log(element);
  //   element.classList.toggle("dark-mode");
  // };
  return (
    <aside className="sidemenu" id="sideMenu" style={{ width: "20%" }}>
      <div className="headerText">
        <span>
          <img
            src={theme}
            className="App-logo"
            style={{ width: "30%" }}
            alt="bot"
          />
        </span>
      </div>
      <div className="side-menu-button" onClick={clearChat}>
        <span style={{ color: "white" }}>&#10133;</span>
        NEW CHAT
      </div>
      <div className="project-info" style={{ height: "100%" }}>
        {/*<button className="side-menu-button" style={{width:"38%"}} onClick={()=>{changeThemeFunction();}}>darkmode</button>*/}
        <div className="about">
          <h2>ABOUT -</h2>
          <p>
            This repository contains fully working chatBOT using chatGPT API,
            where conversations and messages endpoints are implemented with UI
          </p>
        </div>
        <div className="creator">
          <a href="https://www.github.com/nandhakumarRNK" target="_blank" rel="noreferrer noopener">
            <div className="link-icon">
              <img src={github} alt="github" />
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBarContainer;
