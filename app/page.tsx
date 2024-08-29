"use client";

import ChatMessages from "./components/chatMessages";
import ChatInput from "./components/chatInput";
import PageHeading from "./components/pageHeading";

export default function Home() {

  return (
    <main className="flex flex-col h-screen flex-grow overflow-y-auto">
      <PageHeading></PageHeading>
      <ChatMessages></ChatMessages>
      <ChatInput></ChatInput>
    </main>
  );
}
