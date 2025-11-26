import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Project from './pages/Project';

export default function App() {
  return (
    <Router basename="/portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />  {/* Add this route */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
