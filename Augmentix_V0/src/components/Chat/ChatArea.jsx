// /* src/components/Chat/ChatArea.jsx */
import React, { useRef, useEffect } from 'react';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { Loader2 } from 'lucide-react'; // Import loading icon


export const ChatArea = ({ messages, onSubmit, isLoading}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
              <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSubmit={onSubmit} />
    </div>
  );
};

// import React, { useRef, useEffect } from 'react';
// //import { Send } from 'lucide-react';
// import { Message } from './Message';
// import { MessageInput } from './MessageInput';

// export const ChatArea = ({ messages, onSubmit }) => {
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-full">
//       {/* Scrollable messages area */}
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.map((message, index) => (
//           <Message key={index} message={message} />
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Fixed message input */}
//       <MessageInput onSubmit={onSubmit} />
//     </div>
//   );
// };