import { useState } from "react";
import ChatMessages from "./components/ChatMessages";

import { ChatInput } from "./components/ChatInput";

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chat", sender: "user", key: "1" },
    { message: "hello what is your name?", sender: "robot", key: "2" },
    { message: "my name is chatbot", sender: "user", key: "3" },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
