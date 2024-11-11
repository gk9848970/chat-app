import { useChatStore } from "../store/useChatStore";
import Chat from "./chat";
import { NoMessageScreen } from "./no-chat-screen";

export default function ChatArea() {
  const { selectedChatId } = useChatStore();

  return (
    <div className="h-full">
      {selectedChatId ? <Chat /> : <NoMessageScreen />}
    </div>
  );
}
