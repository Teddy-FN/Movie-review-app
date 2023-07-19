import React, { useEffect } from "react";
// Style
import "./style.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "../../Component/Container";

// React Router Dom
import { useParams } from "react-router-dom";

// Fetching
import { fetchDetailMovie } from "../../redux/getdetailMovie";
import { fetchImageMovie } from "../../redux/getImageMovie";
import { useSelector, useDispatch } from "react-redux";

// Swiper

// Import Swiper React components
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detailData = useSelector((state) => {
    return {
      data: state.getDetailMovies.data,
      loading: state.getDetailMovies.loading,
      error: state.getDetailMovies.error,
    };
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailMovie(id));
      dispatch(fetchImageMovie(id));
    }
  }, [id]);

  return (
    <Container>
      <section
        style={{
          height: "140vh",
          width: "100%",
          backgroundImage: `linear-gradient(to right, rgba(43, 27, 46, 1), rgba(43, 27, 46, 0)) ,url(https://image.tmdb.org/t/p/w1280/${detailData?.data?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "left",
          display: "flex",
          justifyContent: "start",
          backgroundPosition: "center",
          padding: 30,
        }}
      >
        <div className="detail-content">
          <LazyLoadImage
            alt={detailData?.data?.poster_path}
            effect="blur"
            src={`https://image.tmdb.org/t/p/w154/${detailData?.data?.poster_path}`}
          />
          <p className="detail-content_title">
            {detailData?.data?.original_title}
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "20px",
            }}
          >
            <button className="btn play">Play</button>
            <button
              className="btn visit"
              onClick={() =>
                (window.location.href = `${detailData.data.homepage}`)
              }
            >
              Visit Site
            </button>
          </div>
        </div>
      </section>

      {/* Detail Movie */}
      <section
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <div
          style={{
            flex: 0.6,
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            {detailData?.data?.genres?.map((items) => {
              return (
                <div
                  key={items.id}
                  style={{
                    padding: "1rem 4rem",
                    borderRadius: "30px",
                    fontSize: "1rem",
                    border: "1px solid #fff",
                  }}
                >
                  {items.name}
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p>{detailData?.data?.overview}</p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "2px solid #000",
                lineHeight: "3rem",
              }}
            >
              <p>Title : </p>
              <p>{detailData?.data?.original_title}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "2px solid #000",
                lineHeight: "3rem",
              }}
            >
              <p>Tagline : </p>
              <p>{detailData?.data?.tagline}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "2px solid #000",
                lineHeight: "3rem",
              }}
            >
              <p>Realese Date : </p>
              <p>{detailData?.data?.release_date}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "2px solid #000",
                lineHeight: "3rem",
              }}
            >
              <p>Status : </p>
              <p>{detailData?.data?.status}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 0.3,
          }}
        >
          <button className="btn see-showtime">
            <p>See Showtimes</p>
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <button className="btn watch-list">
              <p>Add to watchlist</p>
            </button>
            <button className="btn btn-more">v</button>
          </div>
        </div>
      </section>

      {/* Movie Image */}
      <section className="container">
        <h3>Images</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </Container>
  );
};

export default Detail;
