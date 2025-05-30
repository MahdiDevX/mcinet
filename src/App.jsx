
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import HowTo from './components/HowTo';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 font-sans direction-right">
      <Header />
      <main>
        <Hero />
        <Intro />
        <HowTo />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;


