import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/Chat';
import { Navbar } from './components/Navbar';

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
    { role: 'user', content: 'Can you help me understand machine learning?' },
    { role: 'assistant', content: 'Of course! Machine learning is a branch of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.' }
  ]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [files, setFiles] = useState([]);

  const handleSubmit = async (input) => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);

    // Simulated API response
    const response = { role: 'assistant', content: 'This is a demo response.' };
    setMessages(prev => [...prev, response]);
  };

  const handleFileUpload = async (uploadedFiles) => {
    setFiles(prev => [...prev, ...uploadedFiles]);
    const fileList = uploadedFiles.map(file => file.name).join(', ');
    setMessages(prev => [
      ...prev,
      { role: 'user', content: `Uploaded files: ${fileList}` },
      { role: 'assistant', content: 'I\'ve received your files and am processing them.' }
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-1 p-4 gap-4">
        <Sidebar
          onFileUpload={handleFileUpload}
          currentChatId={currentChatId}
          setCurrentChatId={setCurrentChatId}
          files={files}
        />
        <ChatArea
          messages={messages}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;