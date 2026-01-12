import React from 'react'

export default function Chat() {

  // Data simulation : 
  const messages = [
    { sender: "ai", text: "Bonjour, comment puis-je vous aider aujourd'hui ? 😊" },
    { sender: "user", text: "Quelle météo fait-il à Clisson ?" },
    { sender: "ai", text: "Il fait aujourd'hui 10°C dans la ville de Clisson." },
    { sender: "user", text: "Va-t-il pleuvoir aujourd'hui ?" },
  ]

  return (
    <main className="flex flex-col flex-1 items-center p-4">
      <h1>Titre du chat</h1>
      <div className="flex flex-col max-w-[850px] gap-6">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-4 max-w-[70%] shadow-sm rounded-lg
              ${msg.sender === "user" 
              ? "self-end bg-[#003c57] text-white"
              : "self-start border-gray-200" 
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </main>
  )
}
