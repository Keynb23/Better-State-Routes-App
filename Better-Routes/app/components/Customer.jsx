import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Receipt, Download, Wrench, CheckCircle } from 'lucide-react-native';

// --- Consolidated Sub-Components ---

// 1. Invoices Sub-Component (Previously in components/Invoices.jsx)
const InvoicesComponent = () => {
  const mockInvoices = [
    { id: 'I9348', amount: '$540.00', date: 'Oct 01, 2025', status: 'Paid' },
    { id: 'I9347', amount: '$120.50', date: 'Sep 28, 2025', status: 'Pending' },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-inner-md border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Receipt className="w-5 h-5 mr-2 text-blue-500" />
        Customer Invoices
      </h3>
      
      {mockInvoices.map((invoice) => (
        <div key={invoice.id} className="flex justify-between items-center p-3 mb-2 border-b border-gray-100 last:border-b-0">
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-700">{invoice.amount}</p>
            <p className="text-xs text-gray-500">Invoice #{invoice.id} · {invoice.date}</p>
          </div>
          <div className="flex items-center">
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {invoice.status}
            </span>
            <button className="ml-3 p-1 text-blue-500 hover:text-blue-700 transition">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
      <button className="w-full mt-4 py-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">
        View Full History
      </button>
    </div>
  );
};

// 2. Job Equipment Sub-Component (Previously in components/JobEquip.jsx)
const JobEquipmentComponent = () => {
  const mockEquipment = [
    { name: 'Multimeter', needed: true, status: 'Checked' },
    { name: 'Safety Harness', needed: true, status: 'Missing' },
    { name: 'Replacement Filter Kit', needed: false, status: 'Not Applicable' },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Wrench className="w-5 h-5 mr-2 text-gray-600" />
        Required Tools & Equipment
      </h3>
      
      <div className="space-y-3">
        {mockEquipment.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center">
              {item.needed ? (
                <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
              ) : (
                <Clock className="w-5 h-5 mr-3 text-yellow-500" />
              )}
              <p className="text-base font-medium text-gray-700">{item.name}</p>
            </div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              item.status === 'Checked' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">
        Mark All Equipment Ready
      </button>
    </div>
  );
};

// --- Main Customer Detail Component ---
const CustomerDetail = () => {
  const [activeTab, setActiveTab] = useState('Details');
  const job = {
    customer: 'Sarah Connor',
    address: '101 Industrial St, Los Angeles, CA 90001',
    phone: '(555) 555-1984',
    email: 'sarah.c@sky.net',
    jobDetails: 'T-800 Unit repair and software update.',
    jobNumber: 'BR-4001',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Details':
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <h4 className="text-sm font-semibold text-blue-700 mb-2">Job Description</h4>
              <p className="text-gray-700">{job.jobDetails}</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Required Action</h4>
              <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition">
                Start Job (Clock In)
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Attachments</h4>
              <p className="text-gray-500 text-sm">No images uploaded yet.</p>
              {/* Placeholder for Camera Button (Phase 2) */}
              <button className="mt-3 py-2 px-4 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm">
                Capture Before Images
              </button>
            </div>
          </div>
        );
      case 'Invoices':
        // Now using the self-contained component
        return <InvoicesComponent />; 
      case 'Equipment':
        // Now using the self-contained component
        return <JobEquipmentComponent />; 
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {/* Job Header */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{job.customer}</h2>
        <p className="text-sm font-medium text-gray-500 mb-3">Job ID: {job.jobNumber}</p>
        
        {/* Contact Info Group */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-red-500" />
            <p className="flex-1">{job.address}</p>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-green-500" />
            <p>{job.phone}</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-blue-500" />
            <p>{job.email}</p>
          </div>
        </div>

        {/* Redirect Button to Maps */}
        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
          onClick={() => console.log('Redirect to Maps with Job Location')}>
          <MapPin className="w-5 h-5 mr-2" />
          Go to Customer Map
        </button>
      </div>

      {/* Tabs for Sub-Pages */}
      <div className="flex justify-around bg-gray-100 rounded-xl p-1 mb-4 shadow-inner">
        {['Details', 'Equipment', 'Invoices'].map(tab => (
          <button
            key={tab}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${
              activeTab === tab 
                ? 'bg-white shadow-md text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderContent()}

    </div>
  );
};

export default CustomerDetail;
