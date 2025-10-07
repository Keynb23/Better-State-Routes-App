import { Receipt, Download } from 'lucide-react-native';
// This component is intended to be used within the Customer Detail view.
const InvoicesComponent = () => {
  const mockInvoices = [
    { id: 'I9348', amount: '$540.00', date: 'Oct 01, 2025', status: 'Paid' },
    { id: 'I9347', amount: '$120.50', date: 'Sep 28, 2025', status: 'Pending' },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-inner-md">
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

export default InvoicesComponent;
