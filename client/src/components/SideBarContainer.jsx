import React from "react";

const SideBarContainer = ({ setChatLog }) => {
  const clearChat = () => {
    // setChatLog([{ user: "gpt", message: "Welcome again...!" }]);
    setChatLog([]);
    window.location.reload(false);
  };
  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span style={{ color: "white" }}>&#10133;</span>
        NEW CHAT
      </div>
      <div className="project-info">{/* here are the project info */}</div>
    </aside>
  );
};

export default SideBarContainer;
