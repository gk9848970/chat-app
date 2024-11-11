import { Message as MessageType } from "../api/messages";
import { convertTimestampToDate } from "../utils";

export default function Message({ message }: { message: MessageType }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm">{message.content}</div>
      <div className="text-right text-xs opacity-50">
        {convertTimestampToDate(message.timestamp)}
      </div>
    </div>
  );
}
