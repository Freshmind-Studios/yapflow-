import React from'react';
import './styles/Chat.css';

// import copmonent
import Canvas from "../components/Canvas"
import Panel from "../components/Panel"
import ChatTools from "../components/ChatTools"

const Chat = () => {
    return <>
        <div className="block chat">
        <div className='canvas-container'>
        <Panel></Panel>
        <Canvas></Canvas>
        </div>
        <ChatTools></ChatTools>
        </div>
    </>
}

export default Chat;
