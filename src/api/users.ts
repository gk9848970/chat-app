import { api } from ".";

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export const getUsers = async () => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};
