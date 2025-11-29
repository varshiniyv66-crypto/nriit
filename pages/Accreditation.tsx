import React from 'react';

const Accreditation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Accreditation Status</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
        <div className="flex items-center mb-6">
            <img src="https://www.nbaind.org/assets/img/logo.png" alt="NBA" className="h-12 mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">National Board of Accreditation (NBA)</h2>
        </div>
        <p className="text-gray-600 mb-4">
            The institute actively participates in the NBA accreditation process to ensure international quality standards for technical education.
        </p>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electronics & Communication Engg</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">UG</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">Applied / In Process</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pre-qualifier submitted</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Computer Science & Engg</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">UG</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">Applied / In Process</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pre-qualifier submitted</td>
                    </tr>
                     <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Information Technology</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">UG</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">Applied / In Process</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pre-qualifier submitted</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">NAAC Status</h2>
          <p className="text-gray-600">
              Information regarding National Assessment and Accreditation Council (NAAC) status will be updated here upon official communication.
          </p>
      </div>
    </div>
  );
};

export default Accreditation;