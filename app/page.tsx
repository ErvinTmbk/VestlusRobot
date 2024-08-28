"use client";

import ChatViaAPI from "./components/chatViaAPI";
import ChatMessages from "./components/chatMessages";
import ChatInput from "./components/chatInput";
import { useState } from "react";
import { useActions, useUIState } from "ai/rsc";
import { ClientMessage } from "./components/actions";
import { generateId } from "ai";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChatMessages></ChatMessages>
      <ChatInput></ChatInput>
    </main>
  );
}
