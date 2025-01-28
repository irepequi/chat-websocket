import React from "react";
import Chat from "./components/Chat/Chat";
import "./styles/GlobalStyles.scss";

function App() {
  return (
    <div>
      <h1 className="chat-title">EcoChat</h1>
      <Chat />
    </div>
  );
}

export default App;
