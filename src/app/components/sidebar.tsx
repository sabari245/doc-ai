import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface SidebarProps {
  className?: string;
  chats: {
    title: string;
  }[];
}
export function Sidebar(props: SidebarProps) {
  return (
    <div className={cn("pb-12", props.className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Previous Chats
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {props.chats.map((chat, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className="w-full justify-start font-normal flex gap-3 items-center"
                >
                  <MessageCircle size={18} />{" "}
                  <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                    <span>{chat.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
