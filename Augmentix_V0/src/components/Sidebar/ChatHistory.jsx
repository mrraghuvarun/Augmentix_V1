// /* src/components/Sidebar/ChatHistory.jsx */
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, Clock } from 'lucide-react';

// // Sample data generator
// const generateSampleChats = () => {
//   const now = new Date();
//   return {
//     today: [
//       { id: '1', content: 'Machine learning basics discussion', timestamp: now.toISOString() },
//       { id: '2', content: 'Neural networks architecture review', timestamp: now.toISOString() }
//     ],
//     yesterday: [
//       { id: '3', content: 'Python optimization techniques', timestamp: new Date(now.setDate(now.getDate() - 1)).toISOString() }
//     ],
//     lastWeek: [
//       { id: '4', content: 'Data preprocessing methods', timestamp: new Date(now.setDate(now.getDate() - 6)).toISOString() }
//     ]
//   };
// };

// export const ChatHistory = ({ currentChatId, setCurrentChatId }) => {
//     const [collapsedGroups, setCollapsedGroups] = useState({});
//     const [chats] = useState(generateSampleChats());
  
//     return (
//       <div className="flex-1 overflow-y-auto mt-6">
//         <div className="space-y-4">
//           {Object.entries(chats).map(([period, periodChats]) => (
//             <div key={period} className="bg-gray-50 rounded-xl overflow-hidden">
//               <button
//                 onClick={() => setCollapsedGroups(prev => ({...prev, [period]: !prev[period]}))}
//                 className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
//               >
//                 {collapsedGroups[period] ? (
//                   <ChevronRight className="w-4 h-4 mr-2" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4 mr-2" />
//                 )}
//                 <span className="font-medium capitalize">{period}</span>
//                 <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
//                   {periodChats.length}
//                 </span>
//               </button>
  
//               {!collapsedGroups[period] && (
//                 <div className="space-y-1 p-2">
//                   {periodChats.map((chat) => (
//                     <button
//                       key={chat.id}
//                       onClick={() => setCurrentChatId(chat.id)}
//                       className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
//                         currentChatId === chat.id 
//                           ? 'bg-blue-100 text-blue-900' 
//                           : 'hover:bg-gray-100 text-gray-700'
//                       }`}
//                     >
//                       <p className="text-sm font-medium truncate">{chat.content}</p>
//                       <div className="flex items-center mt-1 text-xs text-gray-500">
//                         <Clock className="w-3 h-3 mr-1" />
//                         {new Date(chat.timestamp).toLocaleTimeString()}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

/* src/components/Sidebar/ChatHistory.jsx */
/* src/components/Sidebar/ChatHistory.jsx */
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, Clock } from 'lucide-react';

// // Sample data generator
// const generateSampleChats = () => {
//   const now = new Date();
//   return {
//     today: [
//       { id: '1', content: 'Machine learning basics discussion', timestamp: now.toISOString() },
//       { id: '2', content: 'Neural networks architecture review', timestamp: now.toISOString() },
//       { id: '5', content: 'Extra long chat to demonstrate scrolling', timestamp: now.toISOString() },
//       { id: '6', content: 'Another chat to fill space', timestamp: now.toISOString() },
//       { id: '7', content: 'Yet another chat', timestamp: now.toISOString() }
//     ],
//     yesterday: [
//       { id: '3', content: 'Python optimization techniques', timestamp: new Date(now.setDate(now.getDate() - 1)).toISOString() },
//       { id: '8', content: 'Data science discussion', timestamp: new Date(now.setDate(now.getDate() - 1)).toISOString() }
//     ],
//     lastWeek: [
//       { id: '4', content: 'Data preprocessing methods', timestamp: new Date(now.setDate(now.getDate() - 6)).toISOString() },
//       { id: '9', content: 'Advanced algorithm review', timestamp: new Date(now.setDate(now.getDate() - 6)).toISOString() }
//     ]
//   };
// };

// export const ChatHistory = ({ currentChatId, setCurrentChatId }) => {
//     const [collapsedGroups, setCollapsedGroups] = useState({});
//     const [chats] = useState(generateSampleChats());
  
//     return (
//       <div className="flex-1 overflow-y-auto px-2 pb-4">
//         <div className="space-y-4">
//           {Object.entries(chats).map(([period, periodChats]) => (
//             <div key={period} className="bg-gray-50 rounded-xl overflow-hidden">
//               <button
//                 onClick={() => setCollapsedGroups(prev => ({...prev, [period]: !prev[period]}))}
//                 className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
//               >
//                 {collapsedGroups[period] ? (
//                   <ChevronRight className="w-4 h-4 mr-2" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4 mr-2" />
//                 )}
//                 <span className="font-medium capitalize">{period}</span>
//                 <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
//                   {periodChats.length}
//                 </span>
//               </button>
  
//               {!collapsedGroups[period] && (
//                 <div className="space-y-1 p-2">
//                   {periodChats.map((chat) => (
//                     <button
//                       key={chat.id}
//                       onClick={() => setCurrentChatId(chat.id)}
//                       className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
//                         currentChatId === chat.id 
//                           ? 'bg-blue-100 text-blue-900' 
//                           : 'hover:bg-gray-100 text-gray-700'
//                       }`}
//                     >
//                       <p className="text-sm font-medium truncate">{chat.content}</p>
//                       {/* Timestamp removed per request */}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
  // };

  import React, { useState, useEffect } from 'react';
  import { ChevronDown, ChevronRight } from 'lucide-react';
  
  export const ChatHistory = ({ currentChatId, setCurrentChatId }) => {
      const [collapsedGroups, setCollapsedGroups] = useState({});
      const [groupedChats, setGroupedChats] = useState({
          today: { chats: [] },
          yesterday: { chats: [] },
          previous_7_days: { chats: [] },
          older: { chats: [] }
      });

      // Add this useEffect to monitor groupedChats changes
    useEffect(() => {
      console.log('groupedChats state updated:', groupedChats);
  }, [groupedChats]);
  
      // Fetch chat history
      useEffect(() => {
          const fetchChatHistory = async () => {
                try {
                  const response = await fetch('/api/chat/history');
                  const data = await response.json();
                  
                  const expectedKeys = ['today', 'yesterday', 'previous_7_days', 'older'];
                  
                  const formattedData = expectedKeys.reduce((acc, key) => ({
                      ...acc,
                      [key]: {
                          // If the field is undefined, null, or an empty array, use an empty array
                          chats: data[key] && data[key].length > 0 ? data[key] : []
                      }
                  }), {});
      
                  setGroupedChats(formattedData);


                  console.log('Group Chat:', formattedData);
              } catch (error) {
                  console.error('Error fetching chat history:', error);
              }
          };
  
          fetchChatHistory();
      }, []);
  
      const groupTitles = {
          today: 'Today',
          yesterday: 'Yesterday',
          previous_7_days: 'Previous 7 Days',
          older: 'Older'
      };
  
      return (
          <div className="flex-1 overflow-y-auto px-2 pb-4">
              <div className="space-y-4">
                  {Object.entries(groupedChats).map(([groupKey, group]) => (
                      group.chats.length > 0 && (
                          <div key={groupKey} className="bg-gray-50 rounded-xl overflow-hidden">
                              <button
                                  onClick={() => setCollapsedGroups(prev => ({
                                      ...prev,
                                      [groupKey]: !prev[groupKey]
                                  }))}
                                  className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                              >
                                  {collapsedGroups[groupKey] ? (
                                      <ChevronRight className="w-4 h-4 mr-2" />
                                  ) : (
                                      <ChevronDown className="w-4 h-4 mr-2" />
                                  )}
                                  <span className="font-medium">{groupTitles[groupKey]}</span>
                                  <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
                                      {group.chats.length}
                                  </span>
                              </button>
  
                              {!collapsedGroups[groupKey] && (
                                  <div className="space-y-1 p-2">
                                      {group.chats.map((chat) => (
                                          <button
                                              key={chat.id}
                                              onClick={() => setCurrentChatId(chat.id)}
                                              className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
                                                  currentChatId === chat.id
                                                      ? 'bg-blue-100 text-blue-900'
                                                      : 'hover:bg-gray-100 text-gray-700'
                                              }`}
                                          >
                                              <p className="text-sm font-medium truncate">
                                                  {chat.label}
                                              </p>
                                          </button>
                                      ))}
                                  </div>
                              )}
                          </div>
                      )
                  ))}
              </div>
          </div>
      );
  };