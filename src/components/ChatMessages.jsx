import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {chatMessages.map((msg) => (
        <ChatMessage message={msg.message} sender={msg.sender} key={msg.key} />
      ))}
    </div>
  );
}
export default ChatMessages;
