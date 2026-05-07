import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} /> 
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
