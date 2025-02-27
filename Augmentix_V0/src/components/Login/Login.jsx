import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if fields are empty
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      // Here we're validating against the hardcoded credentials
      if (username === 'augmentix' && password === 'Augmentix@1') {
        onLogin(username, password);
      } else {
        // Handle invalid credentials with a better error message
        setErrorMessage('Invalid credentials! Try username: augmentix, password: Augmentix@1');
      }
      setIsLoading(false);
    }, 800);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        {/* Card with improved shadow and subtle border */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header with enhanced gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              {/* Custom robot avatar with glowing effect and smile */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse"></div>
                <div className="relative p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="3" width="10" height="5" rx="2.5" fill="white" />
                    <rect x="4" y="8" width="16" height="12" rx="3" fill="white" />
                    <circle cx="9" cy="13" r="1.5" fill="#3B82F6" />
                    <circle cx="15" cy="13" r="1.5" fill="#3B82F6" />
                    {/* Replaced straight line with curved smile */}
                    <path d="M10 17.5C10.8333 18.1667 13.1667 18.1667 14 17.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 14h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M19 14h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Welcome to Augmentix</h2>
            <p className="text-blue-100 mt-2">Log in to your account</p>
          </div>
          
          {/* Login form with improved styles */}
          <div className="p-8">
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-100">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 transition-all duration-200"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5 transition-all duration-200"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white font-medium rounded-lg text-sm px-5 py-3.5 text-center 
                  ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} 
                  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300
                  shadow-md hover:shadow-lg`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : "Sign In"}
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer text with subtle animation */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p className="hover:text-blue-500 transition-colors duration-300">
            Augmentix v0.1 Beta © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}