import React, { useEffect } from "react";
// Style
import "./style.scss";

// Star Rating
import ReactStars from "react-rating-stars-component";

// PlaceHolder Image
import PlaceHolderImage from "../../Assets/Img/placeholder.png";

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

  const detailImages = useSelector((state) => {
    return {
      data: state.getImageMovie.data,
      loading: state.getImageMovie.loading,
      error: state.getImageMovie.error,
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
            {detailData?.data?.genres?.map((items, index) => {
              return (
                <div
                  key={index}
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
              <p>Language : </p>
              <p>
                {detailData?.data?.spoken_languages?.map((items, index) => {
                  if (index !== detailData?.data?.spoken_languages.length - 1) {
                    return (
                      <span key={items.iso_639_1}>{items.english_name}, </span>
                    );
                  } else {
                    return items.english_name;
                  }
                })}
              </p>
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

            {/* Prodeuction */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "2px solid #000",
                lineHeight: "3rem",
              }}
            >
              <p>Production : </p>
              {detailData?.data?.production_companies?.map((items, index) => (
                <LazyLoadImage
                  key={index}
                  alt={items.logo_path}
                  placeholderSrc={PlaceHolderImage}
                  style={{
                    height: "100%",
                  }}
                  effect="blur"
                  src={`https://image.tmdb.org/t/p/w154/${items.logo_path}`}
                />
              ))}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <ReactStars
              count={1}
              value={10}
              edit={false}
              size={40}
              activeColor="#ffd700"
            />
            <p
              style={{
                fontSize: "2rem",
              }}
            >
              {detailData?.data?.vote_average}
            </p>
          </div>
        </div>
      </section>

      {/* Movie Logos */}
      <section className="container">
        <h3>Images Logos</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // modules={[Pagination]} // if you want to add pagiantion just add modules
          className="mySwiper"
        >
          {detailImages?.data?.logos?.map((items, index) => (
            <SwiperSlide className="carousel" key={index}>
              <LazyLoadImage
                alt={items.file_path}
                placeholderSrc={PlaceHolderImage}
                style={{
                  height: "100%",
                }}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w154/${items.file_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Movie Image */}
      <section className="container">
        <h3>Images Posters</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // modules={[Pagination]} // if you want to add pagiantion just add modules
          className="mySwiper"
        >
          {detailImages?.data?.posters?.map((items, index) => (
            <SwiperSlide className="carousel" key={index}>
              <LazyLoadImage
                alt={items.file_path}
                placeholderSrc={PlaceHolderImage}
                style={{
                  height: "100%",
                }}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w154/${items.file_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Image Backdrops */}
      <section className="container">
        <h3>Images Backdrops</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // modules={[Pagination]} // if you want to add pagiantion just add modules
          className="mySwiper"
        >
          {detailImages?.data?.backdrops?.map((items, index) => (
            <SwiperSlide className="carousel" key={index}>
              <LazyLoadImage
                alt={items.file_path}
                placeholderSrc={PlaceHolderImage}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w154/${items.file_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
};

export default Detail;
