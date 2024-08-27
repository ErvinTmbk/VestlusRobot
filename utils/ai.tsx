// import { config } from 'dotenv';
// config();

//import { createOpenAI } from '@ai-sdk/openai';
//import { generateText } from 'ai';

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

async function testModel() {
    const result = await generateText({
        model: openAI("gpt-4"),
        prompt: "Say Hi! You are running in a Vercel AI SDK app!"
    })
    console.log(result.text)
}

testModel();