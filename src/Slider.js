import { useContext, useState, useEffect, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { btnContext } from "./App";
import AppBar from "./sections/AppBar";
import Footer from "./sections/Footer";

function Slider({ height, index, sections }) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const { handleSelector } = useContext(btnContext);
  const onSlideChangeHandler = useCallback(
    e => {
      handleSelector(e.activeIndex);
    },
    [handleSelector],
  );

  useEffect(() => {
    if (firstSwiper) {
      firstSwiper.slideTo(index, 1000);
    }
  }, [index, firstSwiper]);

  return (
    <div style={{ height: height }} className="slider-container">
      <AppBar />
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        onSlideChange={onSlideChangeHandler}
        onSwiper={setFirstSwiper}
      >
        {sections.map(({ name, section }) => (
          <SwiperSlide key={name}>{section}</SwiperSlide>
        ))}
      </Swiper>
      {index === 8 && <Footer />}
    </div>
  );
}

export default memo(Slider);
