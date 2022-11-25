import React from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";



// import required modules
import { Navigation } from "swiper";
import { urlFor } from '../lib/client';
export default function Hero({bannerData}) {
  return (
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  {
    bannerData.length&& bannerData.map((item,index)=>{
      console.log(item);
      return(

        <SwiperSlide key={item.id}>
          <div>
            <button>{item.buttonText}</button>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>

          <div>
       <img src={urlFor(item.image)} alt="" />
          </div>
        </SwiperSlide>
      )
    })
  }
      
      </Swiper>
  )
}
