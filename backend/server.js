// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getSongsForWeather } from "./model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/songs", async (req, res) => {
  const { weather } = req.body;
  if (!weather) {
    return res.status(400).json({ error: "Weather condition is required." });
  }

  try {
    const songs = await getSongsForWeather(weather);
    res.json({ songs });
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Failed to fetch songs." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
