import { useQuery } from "@tanstack/react-query";
import { fetchChatMessages } from "../api/messages";
import clsx from "clsx";
import Message from "./message";
import { useUserStore } from "../store/useUserStore";
import { useChatStore } from "../store/useChatStore";

export default function ChatDisplayArea() {
  const { selectedChatId } = useChatStore();
  const { selectedUserId } = useUserStore();

  const { data: messages = [] } = useQuery({
    queryKey: ["messages", selectedChatId],
    queryFn: () => fetchChatMessages(selectedChatId!),
    enabled: !!selectedChatId,
    refetchInterval: 1000,
  });

  return (
    <div
      className={clsx(
        "px-10 py-2",
        "flex flex-col flex-grow gap-1",
        "bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png')] bg-[#efeae2]"
      )}
    >
      {messages.map((message) => {
        const isAuthor = message.senderId === selectedUserId;

        return (
          <div
            key={message.id}
            className={clsx(
              "drop-shadow p-2 rounded-md max-w-[45%]",
              isAuthor ? "self-end" : "self-start",
              isAuthor ? "bg-[#d9fdd3]" : "bg-white"
            )}
          >
            <Message message={message} />
          </div>
        );
      })}
    </div>
  );
}
