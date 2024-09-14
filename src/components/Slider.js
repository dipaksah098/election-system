import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Swiper 7+
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination
          autoplay={{ delay: 2500 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img className="w-full h-[300px] md:h-[500px] object-cover" src="https://assets.rumsan.net/clients/recordnepal/Qmb4rnpW4CTbxTvFRjCxKXVdifu4BnrfpvnySpxpAfKSRR" alt="..."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[300px] md:h-[500px] object-cover" src="https://www.undp.org/sites/g/files/zskgke326/files/2022-08/Nepal_Mock-Election--4_web.jpg" alt="..."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[300px] md:h-[500px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EvDFss5rxKINlczPz_7IZP93cqyhD6rVig&s" alt="..."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[300px] md:h-[500px] object-cover" src="https://assets.rumsan.net/clients/recordnepal/1617600228925" alt="..."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-[300px] md:h-[500px] object-cover" src="https://www.orfonline.org/public/uploads/posts/image/Nepal-elections.jpg" alt="..."/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider


