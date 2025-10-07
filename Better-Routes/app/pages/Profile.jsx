import { User, Clock, ArrowLeft, Edit } from 'lucide-react-native';

// Standard Profile screen with back navigation.
const ProfileScreen = ({ onBack }) => {

  const employee = {
    name: 'Jane Doe',
    title: 'Field Technician',
    id: 'JD1049',
    hours: '40.0 hours',
  };
  
  // Custom Header that handles the back button
  const ProfileHeader = () => (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 h-16 z-20">
      <button 
        onClick={onBack || (() => console.log('Go Back'))} 
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold text-gray-800">Profile</h1>
      <div className="w-10"></div> {/* Spacer */}
    </header>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <ProfileHeader />
      
      <div className="overflow-y-auto flex-1 pb-8">
        
        {/* === Profile Header & Avatar === */}
        <div className="p-6 pb-8 bg-blue-600 items-center justify-center text-center">
          <div className="w-28 h-28 bg-blue-400 rounded-full items-center justify-center mx-auto mb-3 border-4 border-white shadow-xl flex">
            <User className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">{employee.name}</h2>
          <p className="text-base text-blue-100">{employee.title}</p>
        </div>

        {/* === Time Tracking Card === */}
        <div className="mx-4 -mt-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-10 mb-4">
          <div className="flex justify-between items-center mb-4 border-b pb-3 border-gray-100">
            <h3 className="text-lg font-bold text-gray-700 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              Weekly Hours
            </h3>
            <span className="px-3 py-1 bg-blue-500 text-white font-bold text-sm rounded-full">
              {employee.hours}
            </span>
          </div>

          {/* Time Action Buttons */}
          <div className="flex justify-between space-x-2">
            <button className="flex-1 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition">
              Clock Out
            </button>
            <button className="flex-1 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition">
              View History
            </button>
          </div>
          
          <p className="text-xs text-gray-400 text-center mt-3">
            * Hours subject to Admin Verification.
          </p>
        </div>

        {/* === Employee Details List === */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-700 mb-3">My Information</h3>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            {/* Detail Item (Simulated RN View) */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Employee ID</p>
                <p className="text-base font-semibold text-gray-800">{employee.id}</p>
              </div>
              <button className="text-blue-500 p-1 rounded-full hover:bg-blue-50">
                <Edit className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Emergency Contact</p>
                <p className="text-base font-semibold text-gray-800">John Doe (555) 987-6543</p>
              </div>
              <button className="text-blue-500 p-1 rounded-full hover:bg-blue-50">
                <Edit className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-400">Primary Phone</p>
              <p className="text-base font-semibold text-gray-800">(555) 123-4567</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
