import React, { useState, useEffect, useRef } from "react";
import "./Chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const socketRef = useRef(null);

useEffect(() => {
  // Crea la conexión WebSocket
  const socket = new WebSocket("ws://localhost:8080");
  socketRef.current = socket;

  // Establece la conexión WebSocket
  socket.onopen = () => console.log("Conexión WebSocket establecida");

  // Recibe y almacena los mensajes del WebSocket
  socket.onmessage = async (event) => {
    let messageData;

    // Verifica si el mensaje es un Blob
    if (event.data instanceof Blob) {
      messageData = await event.data.text(); // Convertir el Blob a texto
    } else {
      messageData = event.data; // Si no es Blob, usarlo directamente
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { source: "server", content: messageData },
    ]);
  };

  // Muestra cualquier error relacionado con el WebSocket
  socket.onerror = (error) => console.error("Error en WebSocket:", error);

  // Muestra un mensaje cuando la conexión WebSocket se cierra
  socket.onclose = () => console.log("Conexión WebSocket cerrada");

  // Cierra la conexión WebSocket
  return () => {
    socket.close();
    console.log("Conexión WebSocket cerrada");
  };
}, []);

  /**
   * Envía un mensaje mediante una conexión de socket, si el socket está disponible.
   * @param message: es el contenido que se transmitirá.
   */
  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(inputValue);
      setMessages((prevMessages) => [
        ...prevMessages,
        { source: "client", content: inputValue },
      ]);
      setInputValue("");
    } else {
      console.warn("WebSocket no está listo para enviar mensajes.");
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.source === "server" ? "server" : "client"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
