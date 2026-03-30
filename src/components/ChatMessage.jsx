import RobotProfilePicture from "../assets/robot.png";
import UserProfilePicture from "../assets/user.png";
import "./ChatMessage.css";
function ChatMessage({ message, sender }) {
  const isUser = sender == "user";
  return (
    <div className={isUser ? "user-box" : "robot-box"}>
      {isUser ? (
        <>
          <div className="chat-message-text">{message}</div>

          <img src={UserProfilePicture} className="profile-picture" />
        </>
      ) : (
        <>
          <img src={RobotProfilePicture} className="profile-picture" />
          <div className="chat-message-text">{message}</div>
        </>
      )}
    </div>
  );
}

export default ChatMessage;
