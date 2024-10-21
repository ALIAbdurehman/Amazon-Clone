import React from 'react'
import './homeDetails.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';



const HomeDetails = () => {
  return (
    <div className='homeDetails'>
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Best Sellers in Toys & Games  </div>
        <div className="homeDetailLongCardItems">

          {
            <Swiper className='swiper'
            spaceBetween={50}
            slidesPerView={6}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/51CfZ8zGq9L._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81QQOmhZwOL._AC_SY200_.jpg" /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71gHRy76hwL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71S1ndlU7AL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81m+NVSfqCL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81iNXL+fSpL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81891U0mbCL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71wQb2LWUkL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/51CfZ8zGq9L._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81QQOmhZwOL._AC_SY200_.jpg" /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71gHRy76hwL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71S1ndlU7AL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81m+NVSfqCL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81iNXL+fSpL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81891U0mbCL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71wQb2LWUkL._AC_SY200_.jpg"  /></SwiperSlide>
            ...
          </Swiper>
          }
          

        </div>
      </div>
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Best Sellers in Books</div>
        <div className="homeDetailLongCardItems">

          {
            <Swiper className='swiper'
            modules={[Scrollbar]}
            spaceBetween={50}
            slidesPerView={6}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/61ZRi-MxTLL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/51ZvZFJOsrL._AC_SY200_.jpg" /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71InK67X-sL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71KTwO53SnL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81wThrp1YyL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81mFBsBFYXL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/91ZSMtvdM3L._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71sOqrd6JHL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71waptWklgL._AC_SY200_.jpg" /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/91k+yWThKgL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/71-IU8JFyZL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/51dAy6ohGIL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81+P2fmzTHL._AC_SY200_.jpg"  /></SwiperSlide>
            <SwiperSlide className='slide'><img src="https://m.media-amazon.com/images/I/81klRz7JXsL._AC_SY200_.jpg"  /></SwiperSlide>
            ...
          </Swiper>
          }
          

        </div>
      </div>
    </div>
  )
}

export default HomeDetails