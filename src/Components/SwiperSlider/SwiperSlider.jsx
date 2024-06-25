import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import slides from '../../../public/slider.json'

const SwiperSlider = () => {
    return (
        <div className='z-0'>
            <Swiper

                modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                effect={'fade'}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map(slide => <SwiperSlide key={slide.id}>
                    <div className="hero w-full h-56 lg:h-[800px] bg-cover bg-no-repeat bg-center text-center text-white flex flex-col items-center justify-center" style={{ backgroundImage: `url(${slide.image_url})` }}>
                        <div className="hero-overlay bg-opacity-35"></div>
                        <div className='absolute md:space-y-2'>
                            <p className='text-xl md:text-6xl '>{slide.description}</p>
                            <h1  className='text-lg md:text-5xl'>{slide.title}</h1>
                        </div>
                    </div>
                </SwiperSlide>)}

            </Swiper>

        </div>
    );
};

export default SwiperSlider;