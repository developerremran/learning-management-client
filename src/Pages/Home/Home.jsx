import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import FourCard from '../../Components/FourCard/FourCard';
import InfoMore from '../../Components/InfoMore/infoMore';
import TopClass from './TopClass/TopClass';
import NewClass from './NewClass/NewClass';
import UpcommingCLass from './UpcommingClass/UpcommingCLass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Learning Management || Me</title>
            </Helmet>

            {/* Main Start Project  */}

            <Banner></Banner>

            <div className='mt-24 mb-40'>
                <FourCard></FourCard>
            </div>
            <div className='myContainer  '>
                <InfoMore></InfoMore>
            </div>
            <div className=' myContainer'>
              <TopClass></TopClass>
              <NewClass></NewClass>
              <UpcommingCLass></UpcommingCLass>
            </div>

            {/* *Top Class  */}
            {/* *New Class  */}
            {/* *Upcoming Class  */}

            
        </div>
    );
};

export default Home;