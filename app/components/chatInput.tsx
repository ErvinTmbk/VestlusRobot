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

    return(
        // Create form for user message input
        <div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    setInput("");
                    setConversation((currentConversation: ClientMessage[]) => [
                        ...currentConversation,
                        { id: generateId(), role: "user", display: input},
                    ]);

                    const message = await continueConversation(input);

                    setConversation((currentConversation: ClientMessage[]) => [
                        ...currentConversation,
                        message,
                    ]);
                }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value);
                    }}
                />
                <button>Send</button>
            </form>
        </div>
    )
}