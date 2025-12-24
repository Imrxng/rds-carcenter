import React from 'react';
import '@/src/app/page.component.css';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Intro from '@/components/intro';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;