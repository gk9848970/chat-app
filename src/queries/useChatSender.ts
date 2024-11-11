import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/users";
import { useUserStore } from "../store/useUserStore";
import { Chat } from "../api/chats";

export default function useChatSender(chat?: Chat) {
  console.log(chat, chat?.memberIds);
  const { selectedUserId } = useUserStore();
  const senderId = chat?.memberIds.find((id: string) => id !== selectedUserId);

  const { data: sender } = useQuery({
    queryKey: ["users", senderId],
    queryFn: () => getUser(senderId!),
    enabled: !!senderId,
  });

  return sender;
}
