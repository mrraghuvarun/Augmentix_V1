import React from 'react';
import { Bot, LogOut } from 'lucide-react';

export const Navbar = ({ onLogout }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg w-full">
      <div className="px-4 py-3 flex justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          <h1 className="text-xl font-bold">Augmentix v0.1</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm bg-blue-700 px-3 py-1 rounded-full bg-opacity-50">
            Beta
          </div>
          {onLogout && (
            <button 
              onClick={onLogout}
              className="flex items-center gap-1 bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};