// The same story as in api/chat/route.ts
// Keeping this in as a practice example of how to use AI SDK through API routes
// In official work no chance that something like this that doesn't get used at all gets kept!

"use client";

import { useChat } from "ai/react";

export default function ChatViaAPI() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return( 
        <div>
            {messages.map((m => (
                <div key={m.id}>
                    <b>
                        {m.role === "user" ? "User: " : "AI: "}
                    </b>
                    <p>
                        {m.content}
                    </p>
                </div>
            )))}
            <form onSubmit={handleSubmit}>
                <div className="w-full bottom-0">
                    <input
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </form>
        </div>
    );
}