
import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import Accreditation from './pages/Accreditation';
import Research from './pages/Research';
import Placements from './pages/Placements';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dept/:deptId" element={<DepartmentPage />} />
          <Route path="accreditation" element={<Accreditation />} />
          <Route path="research" element={<Research />} />
          <Route path="placements" element={<Placements />} />
          {/* Placeholder routes for other sections */}
          <Route path="contact" element={<div className="p-20 text-center text-2xl">Contact Us</div>} />
          <Route path="about" element={<div className="p-20 text-center text-2xl">About NRIIT</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
