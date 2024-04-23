import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';



const MainCarosel = () => {
    const items = MainCaroselData.map((item) => (

            <img className='cursor-pointer w-[1440px] h-[80vh]'  src={item.image}  alt="" />   


    ));

    return (
        <div>
            <AliceCarousel
            
                items={items}
                   autoWidth
                disableButtonsControls
                   autoPlay
                   autoPlayInterval={1000}
                infinite

            />
        </div>
    )
};

export default MainCarosel;