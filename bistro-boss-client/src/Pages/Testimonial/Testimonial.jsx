import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle'

const Testimonial = () => {
  const [reviews, setreviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setreviews(data))
  }, [])
  return (
    <div>
      <SectionTitle heading={"Testimonials"} subHeading={"What our client say us"}></SectionTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col justify-center items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="my-3">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Testimonial