// Tempted to keep this in the final app, though it won't be used and thus cause clutter
// I just feel like it's nice to have it as a example of how to use it through API Routes
// As this is just a test assignment, I believe it should be okay, in official work shouldn't keep something like this around

// Import dotenv for config
import { config } from 'dotenv';
config();

// Import used AI SDK components
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from "ai";

// Create a new instance of openAI using the provided API key
const openAI = createOpenAI({
    // API key as provided is stored in the .env
    apiKey: process.env.API_URL,
    compatibility: 'strict',
});

// Function used in the chat
export async function POST(request: Request) {
    const { messages } = await request.json();
    const result = await streamText ({
        model: openAI("gpt-4"),
        messages,
    });
    return result.toDataStreamResponse();
};


