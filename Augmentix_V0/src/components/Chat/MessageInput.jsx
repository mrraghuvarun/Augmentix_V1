/* src/components/Chat/MessageInput.jsx */
import React, { useState } from 'react';
import { Send } from 'lucide-react';
export const MessageInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput('');
  };

  return (
    <div className="p-4 border-t border-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-2">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Augmentix..."
            className="flex-1 p-3 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
          />
          <button
                type="submit"
                disabled={!input.trim()}
                className={`p-2 rounded-lg transition-all duration-200 
                  ${input.trim() 
                    ? 'text-blue-500 hover:bg-blue-50' 
                    : 'text-gray-300'}`}
              >
                <Send className="w-5 h-5" />
            </button>
        </div>
      </form>
    </div>
  );
};

// Update the ChatArea component's message input section
// const ChatArea = ({ messages, onSubmit }) => {
//     const [input, setInput] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!input.trim()) return;
//       onSubmit(input);
//       setInput('');
//     };
  
//     return (
//       <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Messages section remains the same */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-6">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 message.role === 'user' ? 'justify-end' : 'justify-start'
//               }`}
//             >
//               <div
//                 className={`max-w-2xl p-4 rounded-2xl shadow-sm ${
//                   message.role === 'user'
//                     ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-800'
//                 }`}
//               >
//                 {message.content}
//               </div>
//             </div>
//           ))}
//         </div>
  
//         {/* Updated message input section */}
//         <div className="p-4 border-t border-gray-100">
//           <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-2">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask Bonobos..."
//                 className="flex-1 p-3 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
//               />
//               <button
//                 type="submit"
//                 disabled={!input.trim()}
//                 className={`p-2 rounded-lg transition-all duration-200 
//                   ${input.trim() 
//                     ? 'text-blue-500 hover:bg-blue-50' 
//                     : 'text-gray-300'}`}
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };