import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Initialize dotenv to read your .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase using your .env variables
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: "Server is running smoothly! 🚀" });
});

// The Projects Route
app.get('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    console.log("Projects found in DB:", data.length);

    res.json(data); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server listening on port ${PORT}`);
});