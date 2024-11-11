import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatList from "./components/chat-list";
import ChatArea from "./components/chat-area";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-4 py-6 h-svh bg-[#D9D7D2]">
        <div className="flex h-full">
          <div className="w-1/3 bg-white border border-l-[#d1d7db]">
            <ChatList />
          </div>
          <div className="w-2/3 bg-[#EFF2F5]">
            <ChatArea />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
