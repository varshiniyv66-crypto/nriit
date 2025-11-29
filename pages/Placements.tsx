
import React from 'react';
import { PLACEMENT_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Briefcase, Award, TrendingUp } from 'lucide-react';

const Placements: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-royal-blue text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-4">Placements & Training</h1>
                <p className="text-xl text-blue-100 max-w-3xl">
                    Our dedicated Placement Cell ensures students are industry-ready through rigorous training programs, internships, and mock interviews.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">450+</h3>
                        <p className="text-gray-600 text-sm">Placements in 2023-24</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <Award className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">12 LPA</h3>
                        <p className="text-gray-600 text-sm">Highest Package</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">52+</h3>
                        <p className="text-gray-600 text-sm">Recruiting Companies</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Placement Trends Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Placement Statistics (Last 3 Years)</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={PLACEMENT_STATS}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="placed" name="Students Placed" fill="#0036F5" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="companies" name="Companies Visited" fill="#f5c518" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Training Modules */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Training Methodology</h3>
                    <div className="space-y-6">
                        <div className="flex">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold">1</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-800">First Year</h4>
                                <p className="text-gray-600 text-sm">Communication Skills & Personality Development</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold">2</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-800">Second Year</h4>
                                <p className="text-gray-600 text-sm">C, Data Structures, Java/Python Training</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold">3</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-800">Third Year</h4>
                                <p className="text-gray-600 text-sm">Aptitude, Reasoning, and Technical Interviews</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold">4</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-800">Final Year</h4>
                                <p className="text-gray-600 text-sm">Company Specific Training & Mock Drives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recruiters */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Top Recruiters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for logos - using text for now as requested to avoid external img errors */}
                    <div className="font-bold text-xl text-gray-600">TCS</div>
                    <div className="font-bold text-xl text-gray-600">Wipro</div>
                    <div className="font-bold text-xl text-gray-600">Infosys</div>
                    <div className="font-bold text-xl text-gray-600">Capgemini</div>
                    <div className="font-bold text-xl text-gray-600">HCL</div>
                    <div className="font-bold text-xl text-gray-600">Tech Mahindra</div>
                    <div className="font-bold text-xl text-gray-600">Cognizant</div>
                    <div className="font-bold text-xl text-gray-600">Accenture</div>
                    <div className="font-bold text-xl text-gray-600">IBM</div>
                    <div className="font-bold text-xl text-gray-600">Mindtree</div>
                    <div className="font-bold text-xl text-gray-600">Hexaware</div>
                    <div className="font-bold text-xl text-gray-600">Virtusa</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Placements;
