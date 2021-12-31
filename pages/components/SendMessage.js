import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

// changed user settings
function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState();
  const [username, setUsername] = useState();
  useEffect(() => {
    if (!user) return null;
    setUsername(user.get("username"));
  }, [user]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: username,
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          console.log(message);
        },
        (err) => {
          console.log(err.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };
  return (
    <form className="flex fixed bg-black bottom-10 opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${username}`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
