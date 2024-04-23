
//Home page has slide bar content of card

import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { useNavigate } from 'react-router-dom';

//adding slide product visible on home screen   
const HomePage = () =>{
  
    return(
        <div>
            <MainCarosel/>
            <div className='space-y-1 py-20 flex flex-col justify-center px-5 lg:px-10 margin-bottom-10px '>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Kurta"}/>   
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Kid's Dress"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Jeans"}/>
            </div>
        </div>
    )
}

export default HomePage;