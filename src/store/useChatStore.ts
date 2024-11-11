import { create } from "zustand";
// import { Chat } from "../api/chats";

type ChatStore = {
  selectedChatId: string | null;
  setSelectedChatId: (chatId: string | null) => void;
  // userChatsById: Record<string, Chat[]>;
  // setUserChatsById: (id: string, chats: Chat[]) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  selectedChatId: null,
  setSelectedChatId: (chatId) => set({ selectedChatId: chatId }),
  // userChatsById: {},
  // setUserChatsById: (id, chats) =>
  //   set((state) => ({
  //     userChatsById: { ...state.userChatsById, [id]: chats },
  //   })),
}));

export { useChatStore };
