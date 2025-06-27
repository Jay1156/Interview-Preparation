import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// OpenRouter configuration
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'mistralai/mistral-7b-instruct';

// 🔹 Route: Generate a clean JavaScript interview question
app.get('/api/question', async (req, res) => {
  const topic = req.query.topic || "JavaScript"; // default to JavaScript if no topic

  try {
    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: MODEL,
        messages: [
          {
            role: "user",
            content: `Give me one interview question on ${topic}. Only return the question text. Do not include explanation or code.`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    res.json({ question: response.data.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error generating question:", error.response?.data || error.message);
    res.status(500).send("Error generating question");
  }
});

// 🔸 Route: Evaluate user's answer
app.post('/api/evaluate', async (req, res) => {
  const { question, answer } = req.body;

  const prompt = `Evaluate this answer:\n\nQuestion: ${question}\nAnswer: ${answer}\n\nGive honest and constructive feedback. If the answer is wrong, suggest corrections.`;

  try {
    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: MODEL,
        messages: [
          {
            role: "system",
            content: "You are a strict technical interviewer. Give easy, clear and shortest feedback on the answer."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    res.json({ feedback: response.data.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error evaluating answer:", error.response?.data || error.message);
    res.status(500).send("Error evaluating answer");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
