import React from 'react';
import { Settings, ArrowLeft, Zap, Moon, Sun, Accessibility } from 'lucide-react-native';

// Settings screen with back navigation and list items.
const SettingsScreen = ({ onBack }) => {

  // Custom Header that handles the back button
  const SettingsHeader = () => (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 h-16 z-20">
      <button 
        onClick={onBack || (() => console.log('Go Back'))} 
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold text-gray-800">Settings</h1>
      <div className="w-10"></div> {/* Spacer */}
    </header>
  );
  
  const SettingItem = ({ title, icon: Icon, description, action }) => (
    <button
      className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 w-full hover:bg-gray-50 transition"
      onClick={action}
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-3 text-blue-500" />
        <div className="text-left">
          <p className="text-base font-medium text-gray-800">{title}</p>
          {description && <p className="text-sm text-gray-500 mt-0.5">{description}</p>}
        </div>
      </div>
      <span className="text-gray-400 text-lg">›</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <SettingsHeader />
      
      <div className="overflow-y-auto flex-1 p-4 pb-8">
        
        {/* === General Group === */}
        <p className="text-sm font-semibold text-gray-400 uppercase mx-2 mt-2 mb-2">
          General
        </p>
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-4">
          <SettingItem 
            title="Account Management" 
            icon={User}
            description="Update personal and security details." 
            action={() => console.log('Go to Account')}
          />
          <SettingItem 
            title="Notifications" 
            icon={Zap}
            description="Job alerts and ETA messages." 
            action={() => console.log('Go to Notifications')}
          />
        </div>

        {/* === Appearance & Accessibility Group === */}
        <p className="text-sm font-semibold text-gray-400 uppercase mx-2 mt-4 mb-2">
          Appearance
        </p>
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-4">
          <SettingItem 
            title="Theme" 
            icon={Moon}
            description="Dark Mode, Light Mode, Auto" 
            action={() => console.log('Go to Theme Picker')}
          />
          <SettingItem 
            title="Accessibility" 
            icon={Accessibility}
            description="Adjust font size and color modes." 
            action={() => console.log('Go to Accessibility')}
          />
        </div>

        {/* === App Info Group === */}
        <p className="text-sm font-semibold text-gray-400 uppercase mx-2 mt-4 mb-2">
          Support & App
        </p>
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <SettingItem 
            title="Help Center" 
            icon={Briefcase}
            action={() => console.log('Go to Help')}
          />
          <SettingItem 
            title="Software Version" 
            icon={Sun}
            description="Better Routes v1.0.0"
            action={() => console.log('Show Version')}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
