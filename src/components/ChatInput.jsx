import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        key: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }
  function saveMessage(event) {
    setInputText(event.target.value);
  }
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Send a message to ChatBot"
        size="30"
        value={inputText}
        onChange={saveMessage}
        className="input-field"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
