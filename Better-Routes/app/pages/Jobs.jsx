import { useState } from 'react';
import { Briefcase, ArrowLeft, List, Target } from 'lucide-react-native';
import CustomerDetail from '../components/Customer';
import JobEquipment from '../components/JobEquip';

// Main Jobs page. Should display the job list, but for now, we simulate the job detail view
// which relies on CustomerDetail component.
const JobsScreen = ({ onBack }) => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'detail'

  // Custom Header that handles the back button
  const JobsHeader = ({ title }) => (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 h-16 z-20">
      <button 
        onClick={viewMode === 'detail' ? () => setViewMode('list') : onBack || (() => console.log('Go Back'))} 
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <button 
        onClick={() => console.log('Show Map View')}
        className="p-2 text-gray-600 hover:text-blue-600 transition"
      >
        {viewMode === 'list' ? <Target className="w-6 h-6" /> : <List className="w-6 h-6" />}
      </button>
    </header>
  );

  const MOCK_JOBS = [
    { id: '1', customer: 'Sarah Connor', time: '10:00 AM', status: 'In Progress', distance: '1.2 mi' },
    { id: '2', customer: 'Miles Dyson', time: '1:30 PM', status: 'New Job', distance: '5.8 mi' },
    { id: '3', customer: 'Kyle Reese', time: '3:45 PM', status: 'Completed', distance: '8.1 mi' },
  ];

  const JobListItem = ({ job }) => (
    <button 
      className="bg-white p-4 mx-4 my-2 rounded-xl shadow-md border border-gray-100 w-full hover:bg-gray-50 transition text-left"
      onClick={() => setViewMode('detail')} // Simulate navigating to detail
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-xl font-bold text-gray-800">{job.customer}</p>
          <p className="text-sm text-gray-500 mt-1">Scheduled: {job.time}</p>
        </div>
        <div className="text-right">
          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
            job.status === 'New Job' ? 'bg-green-100 text-green-700' : 
            job.status === 'In Progress' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'
          }`}>
            {job.status}
          </span>
          <p className="text-lg font-semibold text-blue-600 mt-1">{job.distance}</p>
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <JobsHeader title={viewMode === 'list' ? "Today's Jobs" : "Job Details"} />
      
      <div className="overflow-y-auto flex-1 pb-8">
        {viewMode === 'list' ? (
          // Job List View
          <div className="p-2">
            <p className="text-sm text-gray-500 mx-4 mt-1 mb-3">
              Showing 2 active jobs. Total distance 7.0 mi.
            </p>
            {MOCK_JOBS.map(job => <JobListItem key={job.id} job={job} />)}
          </div>
        ) : (
          // Job Detail View (uses CustomerDetail component which handles its own tabs)
          <CustomerDetail />
        )}
      </div>
    </div>
  );
};

export default JobsScreen;
