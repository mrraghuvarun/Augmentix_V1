/* src/components/Sidebar/FileUpload.jsx */
// import React, { useRef } from 'react';
// import { Upload } from 'lucide-react';

// export const FileUpload = ({ onFileUpload, files }) => {
//   const fileInputRef = useRef(null);

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 bg-gray-50 rounded-xl px-3 py-2 mb-2">
//           Upload Files
//         </label>
//       <div 
//         onClick={() => fileInputRef.current?.click()}
//         className="flex items-center justify-center w-full p-3 border-2 border-dashed rounded-lg hover:bg-gray-50 cursor-pointer"
//       >
//         <input
//           ref={fileInputRef}
//           type="file"
//           multiple
//           onChange={(e) => onFileUpload(Array.from(e.target.files))}
//           className="hidden"
//         />
//         <div className="flex flex-col items-center">
//           <Upload className="w-6 h-6 text-gray-400 mb-1" />
//           <span className="text-sm text-gray-500">Choose files</span>
//         </div>
//       </div>
//       {files.length > 0 && (
//         <div className="mt-2">
//           <h3 className="text-sm font-medium mb-1">Uploaded Files:</h3>
//           <ul className="text-sm text-gray-600">
//             {files.map((file, index) => (
//               <li key={index} className="truncate">{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useRef } from 'react';
// import { Upload } from 'lucide-react';

// export const FileUpload = ({ onFileUpload, files }) => {
//   const fileInputRef = useRef(null);

//   return (
//     <div className="mt-4">  {/* Changed mb-4 to mt-6 for better spacing */}
//       <div 
//         onClick={() => fileInputRef.current?.click()}
//         className="flex items-center justify-center w-full p-6 border-2 border-dashed 
//                  border-gray-200 rounded-xl hover:border-blue-500 cursor-pointer
//                  transition-colors duration-200 bg-gray-50 hover:bg-blue-50"
//       >
//         <input
//           ref={fileInputRef}
//           type="file"
//           multiple
//           onChange={(e) => onFileUpload(Array.from(e.target.files))}
//           className="hidden"
//         />
//         <div className="flex flex-col items-center">
//           <div className="p-3 bg-white rounded-full shadow-sm mb-2">
//             <Upload className="w-6 h-6 text-blue-500" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">Choose files to upload</span>
//         </div>
//       </div>

//       {files.length > 0 && (
//         <div className="mt-2">
//           <h3 className="text-sm font-medium mb-1">Uploaded Files:</h3>
//           <ul className="text-sm text-gray-600">
//             {files.map((file, index) => (
//               <li key={index} className="truncate">{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

/* src/components/Sidebar/FileUpload.jsx */
import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

export const FileUpload = ({ onFileUpload, files }) => {
  const fileInputRef = useRef(null);

  return (
    <div className="mb-4">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center w-full p-2.5 border-2 border-dashed 
                 border-gray-200 rounded-xl hover:border-blue-500 cursor-pointer
                 transition-colors duration-200 bg-gray-50 hover:bg-blue-50"
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(e) => onFileUpload(Array.from(e.target.files))}
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <div className="p-2 bg-white rounded-full shadow-sm mb-1">
            <Upload className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-sm font-medium text-gray-700">Choose files</span>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-2">
          <h3 className="text-sm font-medium mb-1">Uploaded Files:</h3>
          <ul className="text-sm text-gray-600">
            {files.map((file, index) => (
              <li key={index} className="truncate">{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};