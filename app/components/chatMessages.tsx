"use client";

// Imports for used components
import { ClientMessage } from "./actions";
import { useUIState } from "ai/rsc";
import { useEffect, useRef } from "react";

// Component to render messages onto the webpage
export default function ChatMessages() {
    const [conversation] = useUIState();
    
    // To allow for automatic scrolling when new messages are sent or recieved
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversation]);

    // Console log that existed for testing how the conversation was being passed through
    //console.log("Rendering conversation:", conversation);
    return (
        <div className="flex justify-center pb-20 py-7">
            <div className="flex flex-col space-y-4 overflow-y-auto w-full max-w-3xl p-4 mb-4 pb-4">
                {conversation.map((message: ClientMessage) => (
                    <div key={message.id} className="p-2">
                        <b className="text-xl text-zinc-100">{message.role === "user" ? "User: " : "ChatAI: "}</b>
                        <div className="text-zinc-200">{message.display}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}