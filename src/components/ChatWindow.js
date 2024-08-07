import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Chat Window</h2>
      <div className="chat-box border border-gray-400 rounded-lg p-4 mb-4 max-h-60 overflow-y-scroll">
        {messages.map((msg, index) => (
          <p key={index} className="mb-2">{msg}</p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border border-gray-400 rounded-lg px-4 py-2 flex-grow mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
