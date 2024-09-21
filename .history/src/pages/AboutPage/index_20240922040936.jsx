import React from 'react';
import { listmission, locations } from '../../constants/aboutpage';
import MissionSection from './MissionSection';
import LocationsSection from './LocationsSection';
import HeaderSection from './HeaderSection';
import AboutUS from '../../assets';
import About from './About';

const IntroductionPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-[5px]">
        <h2 className="text-[#f8fafc] text-4xl font-black">Trang giới thiệu</h2>
      </div>
      
      <HeaderSection />
      
      <MissionSection listmission={listmission} />
      
      <LocationsSection locations={locations} />

      <About />


    </div>
  );
};

export default IntroductionPage;
