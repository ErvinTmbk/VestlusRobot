// Import for dotenv
import { config } from 'dotenv';
config();

// Import for used components
import { createAI } from "ai/rsc"
import { createOpenAI } from '@ai-sdk/openai';
import { getMutableAIState, streamUI } from "ai/rsc";
import { ReactNode } from "react";
import { generateId } from 'ai';

// Create a new customizable instance of openAI 
const openAI = createOpenAI({
    // API key as provided in the test assignment is stored in the .env
    apiKey: "sk-svcacct-romJ0Cqv-3M_yPahYI8EjrekXfslFCjVlbNRyEQrrDB-hePXA-fHT949_bpXQ_t5PvdvT3BlbkFJLPOAok-gfpgpl_6HYw_AT-HK14zxg1geBOQ7QeOnLdfSWMuctNRCNbEiK4y0d18vkOkA",
    compatibility: 'strict',
});

export interface ServerMessage {
    role: "user" | "assistant"; 
    content: string;
    display: ReactNode;
}

// Interface for ClientMessage
export interface ClientMessage {
    id: string;
    role: "user" | "assistant";
    display: ReactNode;
}

// Main function for AI conversation
export async function continueConversation(
    input: string,
): Promise<ClientMessage> {
    "use server";

    const history = getMutableAIState();

    const result = await streamUI({
        model: openAI("gpt-4"),
        messages: [...history.get(), { role: "user", content: input }],
        text: ({ content, done }) => {
            
            if (done) {
                history.done((messages: ServerMessage[]) => [
                    ...messages,
                    { role: "assistant", content: content },
                ]);
            }
            return <div>{content}</div>;
        },
        
    });
    
    return {
        id: generateId(),
        role: 'assistant',
        display: result.value,
      };

}

// Create AI wrapper to allow using useUIState in the application
export const AI = createAI<ServerMessage[], ClientMessage[]>({
    actions: {
      continueConversation,
    },
    initialAIState: [],
    initialUIState: [],
  });
