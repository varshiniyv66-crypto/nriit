import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">NRIIT Guntur</h3>
            <p className="text-sm leading-relaxed">
              Promoting international quality standards for technical education in India.
              An ISO 9001:2015 Certified Institution.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Examinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Visadala X Road, Medikonduru(M), Guntur, AP - 522438</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9701037149</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>nriit.guntur@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-royal-blue transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-royal-blue transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-royal-blue transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-royal-blue transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} NRI Institute of Technology Guntur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;