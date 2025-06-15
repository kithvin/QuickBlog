import { GoogleGenAI } from "@google/genai";

// Create AI instance with your Gemini API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

async function main(prompt) {
 // Send the prompt to Gemini model and get the response
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",// Use Gemini 2.0 Flash model
    contents: prompt,
  });

   // Return only the text part of the response
  return response.text;
}

export default main; // Export the function for use in other files