"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const chats = [
  {
    title: "Discrete Maths: An Introduction",
  },
  {
    title: "Power of Circuits - A deep dive into your computer hardware",
  },
  {
    title: "Probability in Data Analysis",
  },
];

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ]);

  return (
    <main className="flex h-screen w-screen">
      <div className="w-screen max-w-xs">
        <Sidebar chats={chats} />
      </div>
      <div className="flex-grow flex flex-col items-center">
        <ScrollArea className="space-y-4 flex-grow w-full max-w-4xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              {message.content}
            </div>
          ))}
        </ScrollArea>
        <div className="w-full max-w-4xl">
          {/* TODO: add the chat box here */}
        </div>
      </div>
    </main>
  );
}
