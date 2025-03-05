import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const ChatHistory = ({ currentChatId, setCurrentChatId }) => {
    const [collapsedGroups, setCollapsedGroups] = useState({});
    const [groupedChats, setGroupedChats] = useState({
        today: { chats: [] },
        yesterday: { chats: [] },
        previous_7_days: { chats: [] },
        older: { chats: [] }
    });

    // Fetch API Base URL from .env file
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        console.log('groupedChats state updated:', groupedChats);
    }, [groupedChats]);

    // Fetch chat history using Axios
    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/chat/history`);
                const data = response.data;

                const expectedKeys = ['today', 'yesterday', 'previous_7_days', 'older'];

                const formattedData = expectedKeys.reduce((acc, key) => ({
                    ...acc,
                    [key]: {
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
