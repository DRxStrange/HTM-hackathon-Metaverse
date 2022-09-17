import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          // The save failed
          // error is a Moralis.Error with an error code and message.
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black/80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        type="text"
        className="outline-none bg-transparent text-white placeholder-gray-500 flex-grow pr-5"
        placeholder={`Enter a message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="font-bold text-pink-500"
        onClick={sendMessage}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
