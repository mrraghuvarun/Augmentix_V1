import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/Chat';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login'; // Import the Login component

function App() {
  const [messages, setMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  // Get new chat session when component mounts or when login status changes
  useEffect(() => {
    console.log('Current Chat ID changed:', currentChatId);
    console.log('Trace:', new Error().stack);
    if (currentChatId === null && isLoggedIn) { // Only create a new chat if logged in
      console.log('Attempting to create new chat');
      createNewChat();
    } else if (isLoggedIn && currentChatId) {
      // Load chat history when currentChatId changes
      console.log('Loading chat history for current chat ID');
      loadChatHistory(currentChatId);
    }
  }, [currentChatId, isLoggedIn]);

  const createNewChat = async () => {
    try {
      const response = await fetch('/api/chat/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

    // Set loading state to true before API call
    setIsLoading(true);
  
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          messages: [...messages, newMessage]
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      console.log('Assistant response:', data.content);
  
      setMessages(prevMessages => [...prevMessages, {
        role: 'assistant',
        content: data.content
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prevMessages => [...prevMessages, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.'
      }]);
    } finally {
      // Set loading state to false after response or error
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (uploadedFiles) => {
    const formData = new FormData();
    uploadedFiles.forEach(file => {
      formData.append('files[]', file);
    });

    try {
      const response = await fetch('/api/files/upload', {
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
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, there was an error uploading the files.' }
      ]);
    }
  };

  const loadChatHistory = async (chatId) => {
    console.log('Loading chat history for chatId:', chatId);
    try {
      const response = await fetch(`/api/chat/load/${chatId}`);
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

  // Handle login - updated to match Login component credentials
  const handleLogin = (username, password) => {
    // Using the credentials from the Login component
    if (username === "augmentix" && password === "Augmentix@1") {
      setIsLoggedIn(true);
      // Create a new chat session when logging in
      createNewChat();
    }
    // No need for an alert here since the Login component handles error display
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentChatId(null);
    setMessages([]);
    setFiles([]);
  };

  return (
    <div className="flex flex-col h-screen">
      {!isLoggedIn ? (
        // Show login page if not logged in
        <Login onLogin={handleLogin} />
      ) : (
        // Show main app if logged in
        <>
          {/* Navbar */}
          <div className="flex-none">
            <Navbar onLogout={handleLogout} />
          </div>
          
          {/* Main content */}
          <div className="flex flex-1 overflow-hidden">
            <Sidebar
              onFileUpload={handleFileUpload}
              currentChatId={currentChatId}
              setCurrentChatId={setCurrentChatId}
              files={files}
            />
            <ChatArea
              messages={messages}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;