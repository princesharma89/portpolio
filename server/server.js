const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, getDBStatus } = require('./config/db');

dotenv.config();

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Policy
app.use(cors({
  origin: '*', // Allow all origins for dev/portfolio viewing
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to Database (with fallback)
connectDB();

// API Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/stats', require('./routes/stats'));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'online',
    system: 'Prince Kumar Portfolio API',
    timestamp: new Date().toISOString(),
    database: dbStatus
  });
});

// Root Route
app.get('/', (req, res) => {
  res.send('Prince Kumar Portfolio API Server is running cleanly. Access /api/health for system status.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Global Error]:', err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Prince Kumar Portfolio Backend running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});
