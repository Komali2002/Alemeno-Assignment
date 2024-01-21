import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import CourseList from './CourseList';
import HeroSection from './Components/Hero-Section/HeroSection';
import Footer from './Components/Footer/Footer';
const Home: React.FC = () => {
  return (
    <Fragment>
      <HeroSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
