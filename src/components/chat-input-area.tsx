import { useRef } from "react";
import { useUserStore } from "../store/useUserStore";

/*
{
      "id": "108",
      "chatId": "1",
      "senderId": "2",
      "content": "I'm doing well, thank you!",
      "timestamp": 1731158460000
    }
*/

export default function ChatInputArea({ chatId }: { chatId: string | null }) {
  const { selectedUserId } = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputRef.current === null ||
      inputRef.current?.value.trim() === "" ||
      !chatId ||
      !selectedUserId
    )
      return;

    const newMessage = {
      id: Date.now().toString(),
      chatId,
      senderId: selectedUserId,
      content: inputRef.current?.value,
      timestamp: Date.now(),
    };

    console.log(newMessage);

    const response = await fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });

    if (response.ok) {
      inputRef.current.value = "";
      console.log("Message sent successfully");
    }
  };

  return (
    <div className="bg-[#f0f2f5]">
      <form onSubmit={handleSubmit} className="flex py-2 px-8 gap-4">
        <input
          ref={inputRef}
          id="new-message"
          className="grow rounded-md p-2 outline-none"
          type="text"
          placeholder="Type your message here"
        />
        <button className="text-[#54656f]" type="submit">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enable-background="new 0 0 24 24"
          >
            <title>send</title>
            <path
              fill="currentColor"
              d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
