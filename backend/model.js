// backend/model.js
import { ChatGroq } from "@langchain/groq";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGroq({
  model: "llama3-8b-8192",
  temperature: 0.7,
});

export async function getSongsForWeather(weatherCondition) {
  const prompt = `Suggest 5 well-known songs that fit the mood of "${weatherCondition}" weather. Only include the song title and artist. For example:

- "Here Comes the Sun" - The Beatles
- "Rain on Me" - Lady Gaga & Ariana Grande

Now give your suggestions:
`;

  const response = await model.invoke([new HumanMessage(prompt)]);
  return response.content;
}
