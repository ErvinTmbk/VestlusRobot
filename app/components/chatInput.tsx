// As this component needs user input we are using the use client hook.
"use client";

import { generateId } from "ai";
import { ClientMessage } from "./actions";
import { useActions, useUIState } from "ai/rsc";
import { useState } from "react";

// Create a function for the chat input form
export default function ChatInput() {
    const [input, setInput] = useState<string>("");
    const [conversation, setConversation] = useUIState();
    const {continueConversation} = useActions();
    const [isResponding, setIsResponding] = useState(false);

    // Function to dynamically update the size of the text area as the user types to make it visible to the user what they are typing
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    // Function to allow the text area to accept "enter" key as a way to send the message
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
        }
    };

    // Message sending handler
    const handleSendMessage = async (e: React.FormEvent) => {
            e.preventDefault();
            if (input.trim() === "" || isResponding) return;
        
            // Prevents user from spamming the chat immediately while AI is currently responding
            setIsResponding(true);

            setConversation((currentConversation: ClientMessage[]) => [
                ...currentConversation,
                { id: generateId(), role: "user", display: input },
            ]);
        
            const message = await continueConversation(input);
        
            setConversation((currentConversation: ClientMessage[]) => [
                ...currentConversation,
                message,
            ]);
    
            // Unlock the textarea
            setInput("");
            setIsResponding(false);
        };

    return(
        // Create form for user message input
        <div className=" fixed flex bottom-0 w-full justify-center bg-neutral-700 py-4">
            <form
                onSubmit={handleSendMessage}
                className="flex w-11/12 max-w-2xl"
            >
                <div className="flex w-full max-w-3xl space-x-4">
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="flex-grow p-3 text-zinc-200 bg-neutral-500 border border-neutral-800 rounded-lg focus:outline-none resize-none"
                        placeholder="Type your message..."
                        style={{
                            overflow: 'hidden',
                        }}
                        rows={1}
                        disabled={isResponding}
                    />
                </div> 
                <div className="pl-4">
                    <button
                        className="p-2 bg-lime-700 text-zinc-200 rounded-lg hover:bg-lime-600 border border-neutral-800 flex-shrink-0 min-h-10"
                        disabled={isResponding}
                    >
                    Send
                    </button>
                </div>
            </form>
        </div>
    )
}