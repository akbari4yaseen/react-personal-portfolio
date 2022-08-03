// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import AVATAR1 from "../../assets/images/avatar1.jpg";
import AVATAR2 from "../../assets/images/avatar2.jpg";
import AVATAR3 from "../../assets/images/avatar3.jpg";
import AVATAR4 from "../../assets/images/avatar4.jpg";
const data = [
  {
    avatar: AVATAR1,
    name: "Tina Lion",
    review:
      "Libero, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum doloribus. Libero, temporibus corrupti provident quas quia consectetur dolor eum excepturi exercitationem, iste animi. Voluptas fuga ipsum eius impedit laboriosam.",
  },
  {
    avatar: AVATAR2,
    name: "Shita Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum doloribus. Libero, temporibus corrupti provident quas quia consectetur dolor eum excepturi exercitationem, iste animi. Voluptas fuga ipsum eius impedit laboriosam.",
  },
  {
    avatar: AVATAR3,
    name: "Kwame Happy",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum doloribus. temporibus corrupti provident quas quia consectetur dolor eum excepturi exercitationem, iste animi. Voluptas fuga ipsum eius impedit laboriosam.",
  },
  {
    avatar: AVATAR4,
    name: "Hana Rose",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum doloribus. Libero, temporibus corrupti provident quas quia consectetur dolor eum excepturi exercitationem, iste animi. Voluptas fuga ipsum eius impedit laboriosam.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <figure className="client-avatar">
                <img src={avatar} alt={name} />
              </figure>
              <figcaption className="client-name">{name}</figcaption>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
