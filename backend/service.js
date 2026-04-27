const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// A simple test route to make sure the backend is breathing
app.get('/api/health', (req, res) => {
  res.json({ status: "Server is running smoothly! 🚀" });
});

// This is where you'll eventually add your Supabase routes
// e.g., app.get('/api/projects', async (req, res) => { ... })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server listening on port ${PORT}`);
});