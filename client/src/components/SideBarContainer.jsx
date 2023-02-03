import React from "react";
import theme from "../mainHeaderLogo.svg";

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
          <img src={theme} className="App-logo" style={{ width: "30%" }} alt="bot" />
        </span>
      </div>
      <div className="side-menu-button" onClick={clearChat}>
        <span style={{ color: "white" }}>&#10133;</span>
        NEW CHAT
      </div>
      <div className="project-info" style={{ height: "100%" }}>
        {/*<button className="side-menu-button" style={{width:"38%"}} onClick={()=>{changeThemeFunction();}}>darkmode</button>*/}
      </div>
    </aside>
  );
};

export default SideBarContainer;
