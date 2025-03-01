# WebSocket Chat Application

🚀 **Real-Time Chat Application with WebSocket** 🚀

This project is a real-time chat application using WebSocket. It allows users to send and receive messages instantly between each other without needing to reload the page.

## Features

<p>✨ **Real-time connection**: Messages are sent and received instantly without reloading the page, thanks to WebSocket.</p>
<p>💬 **Text messages**: Users can write and receive text messages in the chat.</p>
<p>🔒 **Secure connection**: Although this project uses an insecure WebSocket connection (`ws://`), it is recommended to use (`wss://`) for better security in a production environment.</p>


## Installation

1. **Clone the repository**
`git clone https://github.com/your-username/chat-websocket.git`

2. **Install dependencies**
In the project directory, install the necessary dependencies:
 
`npm install`


3. **Run the WebSocket server**
Make sure you have Node.js and Express installed. Then, run the WebSocket server:

`node server.js`


4. **Start the frontend application**
To start the React application, navigate to the client directory and run:

`npm start`

Esto abrirá la aplicación en tu navegador por defecto.

## Uso
Once the application is running, open your browser and go to [http://localhost:3000](http://localhost:3000). You will now be able to interact with the real-time chat application.

You can open multiple browser tabs to simulate multiple users connecting to the same server and sending messages between them.

## Technologies Used
- **WebSocket**: For real-time communication between the client and server.
- **React**: JavaScript library for building the user interface.
- **Express**: Node.js framework for creating the WebSocket server.
- **HTML/CSS**: For designing the interface.
