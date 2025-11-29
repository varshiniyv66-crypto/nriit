
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DEPARTMENTS } from '../constants';
import { CheckCircle, Beaker, Users, BookOpen, Handshake, Trophy, Calendar, FileText } from 'lucide-react';
import StatsChart from '../components/StatsChart';

const DepartmentPage: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const department = DEPARTMENTS[deptId || ''];
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'activities'>('overview');

  if (!department) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{department.name}</h1>
          <p className="mt-2 text-lg text-royal-blue font-medium">Code: {department.code} | Intake: {department.intake}</p>
          
          {/* Tabs */}
          <div className="flex space-x-4 mt-6 border-b border-gray-200">
            <button 
                onClick={() => setActiveTab('overview')}
                className={`pb-2 px-1 ${activeTab === 'overview' ? 'border-b-2 border-royal-blue text-royal-blue font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Overview
            </button>
            <button 
                onClick={() => setActiveTab('achievements')}
                className={`pb-2 px-1 ${activeTab === 'achievements' ? 'border-b-2 border-royal-blue text-royal-blue font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Achievements
            </button>
            <button 
                onClick={() => setActiveTab('activities')}
                className={`pb-2 px-1 ${activeTab === 'activities' ? 'border-b-2 border-royal-blue text-royal-blue font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
                Activities
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {activeTab === 'overview' && (
                <>
                    {/* Vision & Mission */}
                    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-royal-blue" /> Vision & Mission
                    </h2>
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Vision</h3>
                        <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-royal-blue">
                        {department.vision}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Mission</h3>
                        <ul className="space-y-2">
                        {department.mission.map((m, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{m}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </section>

                    {/* PEOs */}
                    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Program Educational Objectives</h2>
                        <div className="space-y-3">
                            {department.peos.map((peo) => (
                                <div key={peo.id} className="flex gap-4 p-3 rounded bg-gray-50">
                                    <span className="font-bold text-royal-blue whitespace-nowrap">{peo.id}</span>
                                    <p className="text-sm text-gray-700">{peo.statement}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Faculty */}
                    <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-royal-blue" /> Faculty Members
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {department.faculty.map((f) => (
                        <div key={f.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-gray-900">{f.name}</h3>
                            <p className="text-sm text-royal-blue">{f.designation}</p>
                            <div className="mt-2 text-xs text-gray-500 space-y-1">
                            <p>Qual: {f.qualification}</p>
                            <p>Spec: {f.specialization}</p>
                            <p>Joined: {f.joiningDate}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </section>

                    {/* MOUs Section */}
                    {department.mous && department.mous.length > 0 && (
                    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Handshake className="h-5 w-5 mr-2 text-royal-blue" /> Memorandum of Understandings (MOUs)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {department.mous.map((mou) => (
                            <div key={mou.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="font-bold text-gray-800 text-sm mb-1">{mou.partner}</h3>
                            <p className="text-xs text-gray-500">Date: {mou.date}</p>
                            {mou.description && (
                                <p className="text-xs text-gray-600 mt-2 border-t border-gray-200 pt-2">{mou.description}</p>
                            )}
                            </div>
                        ))}
                        </div>
                    </section>
                    )}
                </>
            )}

            {activeTab === 'achievements' && (
                <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-royal-blue" /> Student Achievements
                    </h2>
                    {department.achievements && department.achievements.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {department.achievements.map((ach) => (
                                <div key={ach.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-800">{ach.title}</h3>
                                            <p className="text-sm text-royal-blue font-medium">{ach.studentName}</p>
                                            <p className="text-sm text-gray-600 mt-1">{ach.description}</p>
                                        </div>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{ach.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No achievements listed for this academic year yet.</p>
                    )}
                </section>
            )}

            {activeTab === 'activities' && (
                <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-royal-blue" /> Department Activities
                    </h2>
                    {department.activities && department.activities.length > 0 ? (
                         <div className="space-y-4">
                            {department.activities.map((act) => (
                                <div key={act.id} className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-white hover:shadow-sm transition-shadow">
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center text-royal-blue">
                                        <span className="text-xs font-bold uppercase">{act.type.replace('_', ' ')}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">{act.title}</h3>
                                        <p className="text-xs text-gray-500 mb-2">{act.date}</p>
                                        <p className="text-sm text-gray-600">{act.description}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    ) : (
                        <p className="text-gray-500">No recent activities.</p>
                    )}
                </section>
            )}

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Stats */}
             <StatsChart data={department.stats} />

            {/* HOD Profile */}
            <div className="bg-royal-blue text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-2">Head of Department</h3>
              <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-royal-blue font-bold text-xl">
                      {department.hodName.charAt(0)}
                  </div>
                  <div>
                      <p className="font-semibold text-lg">{department.hodName}</p>
                      <p className="text-blue-200 text-sm">Professor & HOD</p>
                  </div>
              </div>
              <button className="w-full bg-white text-royal-blue py-2 rounded font-medium hover:bg-blue-50 transition-colors">
                  Contact HOD
              </button>
            </div>

            {/* Labs List */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-royal-blue" /> Laboratories
              </h3>
              <div className="space-y-4">
                {department.labs.map((lab) => (
                  <div key={lab.id} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <h4 className="font-medium text-gray-900 text-sm">{lab.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{lab.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" /> Downloads
                </h3>
                <ul className="space-y-2 text-sm text-royal-blue">
                    <li><a href="#" className="hover:underline">Department Brochure</a></li>
                    <li><a href="#" className="hover:underline">Academic Calendar</a></li>
                    <li><a href="#" className="hover:underline">Time Table</a></li>
                    <li><a href="#" className="hover:underline">Syllabus Book</a></li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
