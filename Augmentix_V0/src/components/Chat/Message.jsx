// /* src/components/Chat/Message.jsx */
// // import React from 'react';

// // export const Message = ({ message }) => (
// //   <div
// //     className={`flex ${
// //       message.role === 'user' ? 'justify-end' : 'justify-start'
// //     }`}
// //   >
// //     <div
// //       className={`max-w-2xl p-4 rounded-2xl shadow-sm ${
// //         message.role === 'user'
// //           ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
// //           : 'bg-gray-100 text-gray-800'
// //       }`}
// //     >
// //       {message.content}
// //     </div>
// //   </div>
// // );

// // import React, { useState } from 'react';
// // import { Copy, Check } from 'lucide-react';

// // export const Message = ({ message }) => {
// //   const [isCopied, setIsCopied] = useState(false);

// //   const copyToClipboard = async () => {
// //     try {
// //       await navigator.clipboard.writeText(message.content);
// //       setIsCopied(true);
// //       setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
// //     } catch (err) {
// //       console.error('Failed to copy text: ', err);
// //     }
// //   };

// //   return (
// //     <div
// //       className={`flex ${
// //         message.role === 'user' ? 'justify-end' : 'justify-start'
// //       }`}
// //     >
// //       <div className="relative group">
// //         <div
// //           className={`max-w-2xl p-4 rounded-2xl shadow-sm ${
// //             message.role === 'user'
// //               ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
// //               : 'bg-gray-100 text-gray-800'
// //           }`}
// //         >
// //           {message.content}
// //         </div>
        
// //         {/* Copy button - only show for assistant messages */}
// //         {message.role === 'assistant' && (
// //           <button
// //             onClick={copyToClipboard}
// //             className="absolute -top-2 -right-2 p-1.5 rounded-lg bg-white shadow-md 
// //                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
// //                      hover:bg-gray-50"
// //           >
// //             {isCopied ? (
// //               <Check className="w-4 h-4 text-green-500" />
// //             ) : (
// //               <Copy className="w-4 h-4 text-gray-500" />
// //             )}
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

import React, { useState } from 'react';
import { Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';


export const Message = ({ message, onFeedback }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFeedback = (type) => {
    setFeedbackStatus(type);
    // Call the onFeedback prop if provided
    if (onFeedback) {
      onFeedback({
        messageId: message.id,
        type: type
      });
    }
  };

  return (
    <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
      <div className={`max-w-2xl p-4 rounded-2xl shadow-sm ${
        message.role === 'user' 
          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        {message.role === 'assistant' ? (
          <div className="prose prose-sm max-w-none prose-p:leading-normal prose-pre:bg-gray-800 prose-pre:text-gray-100">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : (
          message.content
        )}
      </div>
      
      {/* Feedback and Copy Actions */}
      {message.role === 'assistant' && (
        <div className="flex items-center space-x-2 mt-2">
          {/* Copy Button */}
          <button 
            onClick={copyToClipboard} 
            className="flex items-center justify-center p-1 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {/* Positive Feedback Button */}
          <button
            onClick={() => handleFeedback('positive')}
            className={`p-1 rounded-lg shadow-md transition-colors duration-200 ${
              feedbackStatus === 'positive' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
          </button>

          {/* Negative Feedback Button */}
          <button
            onClick={() => handleFeedback('negative')}
            className={`p-1 rounded-lg shadow-md transition-colors duration-200 ${
              feedbackStatus === 'negative' 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// import React, { useState } from 'react';
// import { Copy, Check} from 'lucide-react';

// export const Message = ({ message }) => {
//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(message.content);
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy text: ', err);
//     }
//   };

//   return (
//     <div
//       className={`flex ${
//         message.role === 'user' ? 'justify-end' : 'justify-start'
//       } mb-4`}
//     >
//       <div className="relative group">
//         <div
//           className={`max-w-2xl p-4 rounded-2xl shadow-sm ${
//             message.role === 'user'
//               ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
//               : 'bg-gray-100 text-gray-800'
//           }`}
//         >
//           {message.content}
//         </div>
        
//         {message.role === 'assistant' && (
//           <button
//             onClick={copyToClipboard}
//             className="absolute -top-2 -right-2 p-1.5 rounded-lg bg-white shadow-md 
//                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
//                      hover:bg-gray-50"
//           >
//             {isCopied ? (
//               <Check className="w-4 h-4 text-green-500" />
//             ) : (
//               <Copy className="w-4 h-4 text-gray-500" />
//             )}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };