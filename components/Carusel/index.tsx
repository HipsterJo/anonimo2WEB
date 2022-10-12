// import Swiper core and required modules
import {  Pagination, Autoplay, Scrollbar  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import animes from '../../public/animes.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Anime} from '../../types/Anime';
import PanaramCard from '../PanaramCard';




const Carusel:React.FC =  () => {
  return (
    <Swiper
        spaceBetween={200  }
        
        pagination={
          {clickable: true,
          }
            
          
        }
        scrollbar={{ draggable: true }}
        
        autoplay= {
          {delay: 5000,}
        }
        modules={[Pagination, Autoplay, Scrollbar   ]}
        className="mySwiper"
      >
      {animes.map(
        (anime) => (
          <SwiperSlide key={anime._id}>
            <PanaramCard anime={anime} />
          </SwiperSlide>
        )
      )}
      
    </Swiper>
  );
};

export default Carusel;