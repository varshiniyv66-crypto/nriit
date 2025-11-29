import React from 'react';
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-royal-blue text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Campus" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            NRI Institute of Technology <span className="text-accent-gold">Guntur</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-100">
            Promoting international quality standards for technical education in India. 
            Empowering students with knowledge, ethics, and innovation.
          </p>
          <div className="flex space-x-4">
            <Link to="/dept/cse" className="bg-accent-gold text-royal-dark px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center">
              Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-royal-blue transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-royal-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Accreditation</h3>
              <p className="text-gray-600">
                Committed to quality education with NBA and NAAC accreditation processes in progress for key departments.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-royal-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Highly qualified faculty members dedicated to mentoring and research-driven teaching methodologies.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <BookOpen className="h-12 w-12 text-royal-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Curriculum</h3>
              <p className="text-gray-600">
                Industry-aligned curriculum with focus on emerging technologies like AI, Data Science, and IoT.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Section based on OCR data */}
      <div className="bg-royal-dark py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
                 <div>
                     <div className="text-4xl font-bold text-accent-gold">2370+</div>
                     <div className="text-sm opacity-80">Total Intake Capacity</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-accent-gold">9</div>
                    <div className="text-sm opacity-80">UG/PG Programs</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-accent-gold">100+</div>
                    <div className="text-sm opacity-80">Qualified Faculty</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-accent-gold">15+</div>
                    <div className="text-sm opacity-80">Years of Excellence</div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Home;