
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const { runTestRoute } = require('./src/roadmaps/testRoute');
const { hordesCoinsExp } = require('./src/roadmaps/kanto/island5/hordes-coins-exp');
const { payDayFarm } = require('./src/roadmaps/kanto/island3/payday-farm');

const app = express();
const port = 3000;

app.use(cors());

// Importe e configure o Socket.IO com o servidor HTTP
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*' // Permitir solicitações de qualquer origem
  }
});

app.get('/api/roadmaps/test', async (req, res) => {
  try {
      // const message = await hordesCoinsExp(io); 
      const message = await payDayFarm(io); 

      res.status(200).json({ message });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocorreu um erro no bot.' });
  }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

