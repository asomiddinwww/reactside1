import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import popuimg from '../assets/img/popuimg1.png';
import popuimg2 from '../assets/img/popuimg2.png';
import popuimg3 from '../assets/img/popuimg3.png';

const Popularne = () => {
  return (
    <div className="pt-10 pb-15 pl-5 pr-5 flex items-center justify-center">
      <div className="popul-text text-center w-full max-w-6xl">
        <p className="text-[#F2BE22] text-[22px]">по версии отдыхающих</p>
        <h1 className="text-[#18121E] text-[30px] text-center font-bold leading-[1.1] pb-9">
          Популярные направления
        </h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
            
          <SwiperSlide>
            <a href="#" className='w-full flex justify-center hover:scale-101 transition-all'><img className="rounded-2xl" src={popuimg} alt="popu1" /></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='w-full flex justify-center hover:scale-101 transition-all'><img className="rounded-2xl" src={popuimg2} alt="popu2" /></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='w-full flex justify-center hover:scale-101 transition-all'><img className="rounded-2xl" src={popuimg3} alt="popu3" /></a>
          </SwiperSlide>
        </Swiper>
        <div className="pt-10 flex justify-center">
          <button className="bg-[#1A3E3E] cursor-pointer text-white pt-3 pb-3 pl-7 pr-7 rounded-[5px] text-[15px]">
            Рейтинг направлений
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popularne;
