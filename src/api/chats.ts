import { api } from ".";

type ChatType = "direct";

export type Chat = {
  id: string;
  type: ChatType;
  name: null | string;
  memberIds: string[];
};

export const getChats = async () => {
  const response = await api.get<Chat[]>("/chats");
  return response.data;
};

export const getChat = async (id: string) => {
  const response = await api.get<Chat>(`/chats/${id}`);
  return response.data;
};
