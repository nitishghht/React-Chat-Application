import { ChatEngine } from "react-chat-engine";

import "./App.css";
 import ChatFeed from './Component/ChatFeed';
const App = ()=> {
    return (
        <ChatEngine
            height="100vh"
            projectID="06e8d0a7-b67f-4fd4-842d-6c5e0d833c6c"
            userName="harsh"
            userSecret="123123"
            renderChatFeed={(ChatAppProps) => <ChatFeed {
                ...ChatAppProps
            } />}

        />
    );
}
export default App;