import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
      // Simulate a response from the support agent
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for reaching out. How can I assist you?", sender: "agent" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mb-4">Online Chat</h1>
      <div className="w-full max-w-2xl border p-4 space-y-4">
        <div className="h-64 overflow-y-auto border p-2">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <p className={`inline-block p-2 rounded ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;