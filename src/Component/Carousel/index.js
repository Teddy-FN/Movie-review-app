import React, { useEffect, useMemo, memo } from "react";

import ToogleGenre from "../../UI/ToogleGenre";
import Container from "../Container";

// Styles
import "./carousel.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCarouselListMovies } from "../../redux/getListCarousel";

// Swiper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Lazy Load Image Component
import { LazyLoadImage } from "react-lazy-load-image-component";

const Carousel = (props) => {
  const dispatch = useDispatch();
  const listCarousel = useSelector((state) => {
    return {
      data: state.getCarousel.data,
      loading: state.getCarousel.loading,
      error: state.getCarousel.error,
    };
  });

  useEffect(() => {
    return () => {
      dispatch(fetchCarouselListMovies());
    };
  }, [dispatch]);

  const CONTENT_CAROUSEL = useMemo(() => {
    if (listCarousel.loading) {
      return (
        <Skeleton
          highlightColor="#2b1b2e"
          baseColor="#573b5c"
          height={550}
          count={1}
          enableAnimation
          duration={0.5}
        />
      );
    }

    if (listCarousel.data && !listCarousel.loading) {
      return (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {listCarousel?.data?.map((items, idx) => (
            <SwiperSlide
              className="carousel"
              key={idx}
              style={{
                height: "140vh",
                width: "100%",
                backgroundImage: `linear-gradient(to right, rgba(43, 27, 46, 1), rgba(43, 27, 46, 0)) ,url(https://image.tmdb.org/t/p/w1280/${items?.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "left",
                display: "flex",
                justifyContent: "start",
                backgroundPosition: "center",
                padding: 30,
              }}
            >
              <div className="carousel_content">
                <LazyLoadImage
                  alt={items.poster_path}
                  effect="blur"
                  src={`https://image.tmdb.org/t/p/w154/${items.poster_path}`}
                />
                <p className="carousel_content_title">{items.original_title}</p>
                <p className="carousel_content_overview">{items.overview}</p>
                <button className="btn play">Play</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  }, [listCarousel]);

  return (
    <Container>
      {CONTENT_CAROUSEL}
      <ToogleGenre listGenre={props.listGenre} />
    </Container>
  );
};

export const MemoizedCarousel = memo(Carousel);
