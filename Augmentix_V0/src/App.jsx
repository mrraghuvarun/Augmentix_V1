import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/Chat';
import { Navbar } from './components/Navbar';

const API_BASE_URL = import.meta.env.VITE_API_URL; // Use environment variable

function App() {
  const [messages, setMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('Current Chat ID changed:', currentChatId);
    if (currentChatId === null) {
      console.log('Attempting to create new chat');
      createNewChat();
    } else {
      console.log('Loading chat history for current chat ID');
      loadChatHistory(currentChatId);
    }
  }, [currentChatId]);

  const createNewChat = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      setCurrentChatId(data.sessionId);
      setMessages([]); 
      setFiles([]); 
      return data.sessionId;
    } catch (error) {
      console.error('Error creating new chat:', error);
      return null;
    }
  };

  const handleSubmit = async (input) => {
    if (!input.trim()) return;
  
    const newMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    const sessionId = currentChatId || (await createNewChat());

    setIsLoading(true);
  
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, messages: [...messages, newMessage] }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      console.log('Assistant response:', data.content);
  
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (uploadedFiles) => {
    const formData = new FormData();
    uploadedFiles.forEach(file => {
      formData.append('files[]', file);
    });

    try {
      const response = await fetch(`${API_BASE_URL}/files/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      setFiles(prev => [...prev, ...uploadedFiles]);
      setMessages(prev => [
        ...prev,
        { role: 'user', content: `Uploaded files: ${uploadedFiles.map(f => f.name).join(', ')}` },
        { role: 'assistant', content: data.message || 'Files uploaded successfully.' }
      ]);
    } catch (error) {
      console.error('Error uploading files:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error uploading the files.' }]);
    }
  };

  const loadChatHistory = async (chatId) => {
    console.log('Loading chat history for chatId:', chatId);
    try {
      const response = await fetch(`${API_BASE_URL}/chat/load/${chatId}`);
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setCurrentChatId(chatId);
      setMessages(data.messages);
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onFileUpload={handleFileUpload} currentChatId={currentChatId} setCurrentChatId={setCurrentChatId} files={files} />
        <ChatArea messages={messages} onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
