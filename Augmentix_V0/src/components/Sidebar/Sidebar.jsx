// /* src/components/Sidebar/Sidebar.jsx */
// import React from 'react';
// import { MessageSquare } from 'lucide-react';
// import { FileUpload } from './FileUpload';
// import { ChatHistory } from './ChatHistory';

// export const Sidebar = ({ onFileUpload, currentChatId, setCurrentChatId, files }) => {
//   return (
//     <div className="w-80 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
//       <div className="p-4">
//         <button
//           onClick={() => setCurrentChatId(null)}
//           className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl 
//                      hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
//                      shadow-md hover:shadow-lg flex items-center justify-center gap-2"
//         >
//           <MessageSquare className="w-4 h-4" />
//           <span>New Chat</span>
//         </button>
//         <FileUpload onFileUpload={onFileUpload} files={files} />
//         <ChatHistory
//           currentChatId={currentChatId}
//           setCurrentChatId={setCurrentChatId}
//         />
//       </div>
//     </div>
//   );
// };
// import React, { useState } from 'react';
// import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
// import { FileUpload } from './FileUpload';
// import { ChatHistory } from './ChatHistory';

// export const Sidebar = ({ onFileUpload, currentChatId, setCurrentChatId, files }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className={`bg-white shadow-lg flex flex-col h-full transition-all duration-300 ${
//       isCollapsed ? 'w-16' : 'w-80'
//     }`}>
//       {/* Top fixed section */}
//       <div className="flex-none p-4">
//         <div className="flex items-center gap-2">
//           {!isCollapsed && (
//             <button
//               className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl 
//                        hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
//                        shadow-md hover:shadow-lg flex items-center justify-center gap-2"
//             >
//               <MessageSquare className="w-4 h-4" />
//               <span>New Chat</span>
//             </button>
//           )}
          
//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="flex-none bg-white rounded-lg p-2 shadow-md hover:bg-gray-50 transition-colors"
//           >
//             {isCollapsed ? (
//               <ChevronRight className="w-4 h-4 text-gray-600" />
//             ) : (
//               <ChevronLeft className="w-4 h-4 text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {!isCollapsed && (
//         <div className="flex flex-col h-full">
//           {/* File upload section - fixed */}
//           <div className="flex-none px-4 pb-4 border-b border-gray-100">
//             <FileUpload onFileUpload={onFileUpload} files={files} />
//           </div>

//           {/* Chat history - scrollable */}
//           <div className="flex-1 overflow-y-auto pt-4">
//             <ChatHistory
//               currentChatId={currentChatId}
//               setCurrentChatId={setCurrentChatId}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

/* src/components/Sidebar/Sidebar.jsx */
/* src/components/Sidebar/Sidebar.jsx */
/* src/components/Sidebar/Sidebar.jsx */
/* src/components/Sidebar/Sidebar.jsx */
/* src/components/Sidebar/Sidebar.jsx */
/* src/components/Sidebar/Sidebar.jsx */
import React, { useState } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { FileUpload } from './FileUpload';
import { ChatHistory } from './ChatHistory';

export const Sidebar = ({ onFileUpload, currentChatId, setCurrentChatId, files }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNewChat = () => {
    console.log('New Chat button clicked');
    console.trace('Call stack for new chat');  
    setCurrentChatId(null);
  };


  return (
    <div className={`bg-white shadow-lg flex flex-col h-full relative transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    }`}>
      {/* Top section with collapse button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-white rounded-lg p-1 shadow-md hover:bg-gray-50 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="flex flex-col h-full overflow-hidden">
          {/* New Chat Button */}
          <div className="px-4 pt-12 pb-4">
            <button
              onClick={handleNewChat}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl 
                         hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
                         shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>New Chat</span>
            </button>
          </div>

          <div className="px-4">
            <FileUpload onFileUpload={onFileUpload} files={files} />
          </div>
          <ChatHistory
            currentChatId={currentChatId}
            setCurrentChatId={setCurrentChatId}
          />
        </div>
      )}
    </div>
  );
};