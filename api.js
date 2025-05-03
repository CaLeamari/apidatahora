import express from 'express';
import cors from 'cors';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API de Data e Hora');
});

app.get('/datetime', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toLocaleDateString('pt-BR'),
    time: now.toLocaleTimeString('pt-BR'),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
