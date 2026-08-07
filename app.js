const express = require('express');
const app = express();

app.get('/api/socios', (req, res) => {
    // Lógica simulada de la API
    res.status(200).json([
        { id: 1, nombre: 'Juan Pérez', estado: 'Activo' },
        { id: 2, nombre: 'María Gómez', estado: 'Inactivo' }
    ]);
});

module.exports = app;
