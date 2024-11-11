import clsx from "clsx";
import { User } from "../api/users";

export default function ChatHeader({ sender }: { sender?: User }) {
  if (!sender) return <div>Loading...</div>;

  return (
    <div
      className={clsx("p-3 flex gap-3 bg-[#f0f2f5] border-b border-gray-200")}
    >
      <img
        className="w-10 h-10 rounded-full overflow-hidden object-cover border border-gray-600 shrink-0"
        src={sender.avatarUrl}
        alt={sender.name}
      />
      <div className="flex flex-col relative grow self-center">
        <div className="text-base text-gray-950">{sender.name}</div>
      </div>
    </div>
  );
}
