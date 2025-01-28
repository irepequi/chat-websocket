const WebSocket = require("ws");
const express = require("express");

const app = express();
const PORT = 8080;

// Configuración del servidor HTTP con Express
app.get("/", (req, res) => res.send("Servidor WebSocket activo"));

const server = app.listen(PORT, () => {
  console.log(`Servidor WebSocket escuchando en http://localhost:${PORT}`);
});

// Crea un servidor WebSocket 
const wss = new WebSocket.Server({ server });

// Almacena las conexiones activas
const clients = new Set();

// Nuevas conexiones
wss.on("connection", (ws) => {
  console.log("Nuevo cliente conectado");
  clients.add(ws);

  // Recibe y envía los mensajes
  ws.on("message", (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Reenvia el mensaje a todos los clientes conectados
    for (let client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Servidor recibió: ${message}`);
      }
    }
  });

  // Cierra la conexión cuando el cliente se desconecta
  ws.on("close", () => {
    console.log("Cliente desconectado");
    clients.delete(ws);
  });

  // Gestiona los errores en el WebSocket
  ws.on("error", (error) => {
    console.error("Error en WebSocket:", error);
  });
});