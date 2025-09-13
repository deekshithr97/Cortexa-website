
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg-light min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans antialiased">
      <div className="w-full max-w-screen-xl mx-auto bg-brand-dark-bg text-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative z-10 p-6 lg:p-8">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
