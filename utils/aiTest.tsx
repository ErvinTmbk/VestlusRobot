
// For testint purposes common JS syntax
const { config } = require('dotenv');
config();

const { createOpenAI } = require('@ai-sdk/openai');
const { generateText } = require('ai');

// Create a new customizable instance of openAI 
const openAI = createOpenAI({
    // API key as provided in the test assignment is stored in the .env
    apiKey: process.env.API_URL,
    compatibility: 'strict',
});


// Function to test connection
async function testModel() {
    const result = await generateText({
        model: openAI("gpt-4"),
        prompt: "Say Hi! You are running in a Vercel AI SDK app!"
    })
    console.log(result.text)
}

// Call test function
testModel();
