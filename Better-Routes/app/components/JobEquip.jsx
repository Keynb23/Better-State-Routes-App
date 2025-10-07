import { Wrench, CheckCircle, Clock } from 'lucide-react-native';

const JobEquipment = () => {
  const mockEquipment = [
    { name: 'Multimeter', needed: true, status: 'Checked' },
    { name: 'Safety Harness', needed: true, status: 'Missing' },
    { name: 'Replacement Filter Kit', needed: false, status: 'Not Applicable' },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
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

export default JobEquipment;
