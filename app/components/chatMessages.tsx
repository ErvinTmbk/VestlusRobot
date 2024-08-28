"use client";

import { ClientMessage } from "./actions";
import { useUIState } from "ai/rsc";


export default function ChatMessages() {
    const [conversation] = useUIState();
    console.log("Rendering conversation:", conversation);
    return (
        <div>
            <div>
                {conversation.map((message: ClientMessage) => (
                    <div key={message.id}>
                        <b>{message.role}:</b>
                        <div>{message.display}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}