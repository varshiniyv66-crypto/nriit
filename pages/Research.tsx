import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Research & Development</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-royal-blue mb-4">Recent Publications</h2>
                <ul className="space-y-4 text-sm text-gray-700">
                    <li className="pb-4 border-b border-gray-100">
                        <p className="font-semibold">Automated Face Recognition Using Deep Learning</p>
                        <p className="text-gray-500">Dr. Jampani Chandra Sekhar et al. | Springer | 2024</p>
                    </li>
                    <li className="pb-4 border-b border-gray-100">
                        <p className="font-semibold">Analysis of Multi-Channel Learning Mechanisms</p>
                        <p className="text-gray-500">D. Koteswar Rao | International Conference | 2023</p>
                    </li>
                     <li className="pb-4 border-b border-gray-100">
                        <p className="font-semibold">Design of Reactive Power Management System</p>
                        <p className="text-gray-500">Dr. J. Krishna Kishore | Mathematical Statistician | 2022</p>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h2 className="text-xl font-bold text-royal-blue mb-4">Research Labs</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold">IoT Research Lab</h3>
                        <p className="text-sm text-gray-600">Focus on Smart Sensors & Automation</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold">Data Analytics Lab</h3>
                        <p className="text-sm text-gray-600">Big Data & Machine Learning Research</p>
                    </div>
                 </div>
            </div>
        </div>

        <div>
             <div className="bg-royal-blue text-white p-6 rounded-xl shadow-lg">
                 <h3 className="text-xl font-bold mb-4">R&D Statistics</h3>
                 <div className="space-y-4">
                     <div>
                         <div className="text-3xl font-bold text-accent-gold">30+</div>
                         <div className="text-sm opacity-80">Journal Publications (2023-24)</div>
                     </div>
                     <div>
                         <div className="text-3xl font-bold text-accent-gold">6</div>
                         <div className="text-sm opacity-80">Patents Filed</div>
                     </div>
                     <div>
                         <div className="text-3xl font-bold text-accent-gold">12</div>
                         <div className="text-sm opacity-80">Ph.D. Faculty</div>
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Research;