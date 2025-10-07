import React from 'react';
import { Search, MapPin, X, ArrowLeft } from 'lucide-react-native';

// Standalone Maps page with unified search and back navigation.
const MapsScreen = ({ onBack }) => {
  
  // Custom Header that handles the back button
  const MapHeader = () => (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 h-16 z-20">
      <button 
        onClick={onBack || (() => console.log('Go Back'))} 
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold text-gray-800">Job Map</h1>
      <div className="w-10"></div> {/* Spacer */}
    </header>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <MapHeader />
      
      {/* Unified Search Bar */}
      <div className="p-4 bg-white shadow-lg z-10">
        <div className="flex items-center bg-gray-100 rounded-xl p-3 border border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            placeholder="Search Address, Customer, or Job #"
            className="flex-1 text-base bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
            type="search"
          />
          {/* Clear button placeholder */}
          <X className="w-5 h-5 text-gray-400 ml-3 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Map Placeholder Area */}
      <div className="flex-1 items-center justify-center bg-gray-200 border-t border-gray-300">
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 mx-auto text-red-500 mb-4" />
          <p className="text-gray-600 text-lg font-semibold">
            [Map Rendering Placeholder]
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Displays routes, current job locations, and employee position.
          </p>
        </div>
      </div>

      {/* Quick Action Button */}
      <button className="absolute bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition z-30">
        <MapPin className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MapsScreen;
