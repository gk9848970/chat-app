import { api } from ".";

export type Message = {
  id: string;
  chatId: string;
  content: string;
  timestamp: number;
  senderId: string;
};

export const fetchChatMessages = async (chatId: string) => {
  const response = await api.get<Message[]>(`/messages`, {
    params: {
      chatId,
    },
  });

  return response.data;
};
