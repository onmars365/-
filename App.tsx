import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Business />
      </main>
      <Footer />
    </div>
  );
}

export default App;