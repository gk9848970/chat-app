import ChatDisplayArea from "./chat-display-area";
import ChatHeader from "./chat-header";
import ChatInputArea from "./chat-input-area";
import { useQuery } from "@tanstack/react-query";
import { getChat } from "../api/chats";
import { useChatStore } from "../store/useChatStore";
import useChatSender from "../queries/useChatSender";

export default function Chat() {
  const { selectedChatId } = useChatStore();

  const { data: chat } = useQuery({
    queryKey: ["chat", selectedChatId],
    queryFn: () => getChat(selectedChatId!),
    enabled: !!selectedChatId,
  });

  const sender = useChatSender(chat);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader sender={sender} />
      <ChatDisplayArea />
      <ChatInputArea chatId={selectedChatId} />
    </div>
  );
}
