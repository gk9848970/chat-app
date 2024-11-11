import { useQuery } from "@tanstack/react-query";
import { Chat } from "../api/chats";
import { useUserStore } from "../store/useUserStore";
import { getUser } from "../api/users";
import { fetchChatMessages } from "../api/messages";
import { useChatStore } from "../store/useChatStore";
import clsx from "clsx";
import { convertTimestampToDate } from "../utils";

export default function DirectChatItem({ chat }: { chat: Chat }) {
  const { selectedUserId } = useUserStore();
  const { selectedChatId, setSelectedChatId } = useChatStore();
  const senderId = chat.memberIds.find((id) => id !== selectedUserId);

  const { data: sender } = useQuery({
    queryKey: ["users", senderId],
    queryFn: () => getUser(senderId!),
    enabled: !!senderId,
  });

  const { data: messages } = useQuery({
    queryKey: ["messages", chat.id],
    queryFn: () => fetchChatMessages(chat.id),
    enabled: !!chat.id,
    refetchInterval: 1000,
  });

  if (!sender || !messages) return <div>Loading data</div>;

  const lastMessage = messages[messages.length - 1];

  return (
    <div
      className={clsx(
        "p-3 flex gap-2 cursor-pointer",
        selectedChatId === chat.id && "bg-[#f0f2f5]"
      )}
      onClick={() => setSelectedChatId(chat.id)}
    >
      <img
        className="w-14 h-14 rounded-full overflow-hidden object-cover border border-gray-600 shrink-0"
        src={sender.avatarUrl}
        alt={sender.name}
      />
      <div className="flex flex-col relative grow self-center">
        <div className="text-base text-gray-950">{sender.name}</div>
        <div className="text-sm text-nowrap text-gray-700">
          {lastMessage.content}
        </div>
        <div className="absolute top-0 right-0 text-xs text-gray-500">
          {convertTimestampToDate(lastMessage.timestamp)}
        </div>
      </div>
    </div>
  );
}
