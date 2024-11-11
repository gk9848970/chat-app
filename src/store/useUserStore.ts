import { create } from "zustand";
import { User } from "../api/users";

type UserStore = {
  users: User[];
  setUsers: (users: User[]) => void;
  selectedUserId: string | null;
  setSelectedUserId: (userId: string | null) => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  selectedUserId: "1",
  setSelectedUserId: (userId) => set({ selectedUserId: userId }),
}));

export { useUserStore };
