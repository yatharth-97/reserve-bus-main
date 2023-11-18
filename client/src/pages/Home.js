import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

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
