import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='font-sans'>
      <NavBar />
      <Header />
      <div>
        <Footer />
      </div>
    </div>
  );
}
