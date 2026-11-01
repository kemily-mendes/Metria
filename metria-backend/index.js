const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleware = require('./src/middleware/errorMiddleware');
const institutionRoutes = require('./src/routes/institutionRoutes');
const balanceRecordRoutes = require('./src/routes/balanceRecordRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes - Definindo os caminhos da URL para o seu front-end acessar
app.use('/institutions', institutionRoutes); 
app.use('/balance-records', balanceRecordRoutes);

// Error middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});