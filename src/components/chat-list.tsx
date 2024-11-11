import { useQuery } from "@tanstack/react-query";
import { getChats } from "../api/chats";
import { useUserStore } from "../store/useUserStore";
import DirectChatItem from "./direct-chat-item";

export default function ChatList() {
  const { selectedUserId } = useUserStore();

  const { data: chats = [] } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
  });

  if (!selectedUserId) return <div>Loading user data</div>;

  const userChats = chats.filter((chat) =>
    chat.memberIds.includes(selectedUserId)
  );

  return (
    <div className="flex flex-col">
      {userChats.map((chat) => (
        <DirectChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
