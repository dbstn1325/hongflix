import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../pages/Modal';
import axios from 'axios';

const Main = () => {
  // 구독 여부 상태
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalGenre, setModalGenre] = useState('');
  const [modalReleaseDate, setModalReleaseDate] = useState('');

  // openModal 함수 정의
  const openModal = (imageSrc, title, genre, releaseDate) => {
    setModal(true);
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalGenre(genre);
    setModalReleaseDate(releaseDate);
  };

  // closeModal 함수 정의
  const closeModal = () => {
    setModal(false);
    setModalImage('');
  };

  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, title, genre, releaseDate }) => (
    <div className="relative mx-1 mb-1">
      <img
        className="object-cover"
        src={imageSrc}
        alt="carousel"
        onClick={() => openModal(imageSrc, title, genre, releaseDate)}
      />
      <div className="py-2 text-center">{title}</div>
    </div>
  );

  // 오른쪽 화살표
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-1.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'>'}
    </button>
  );

  // 왼쪽 화살표
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-1.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'<'}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for screens less than 768px wide
        settings: {
          slidesToShow: 3, // Display one slide at a time
          slidesToScroll: 1, // Scroll one slide at a time
        },
      },
    ],
  };

  const slides1 = [
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/3.jpg`,
      title: '도쿄 리벤저스',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/4.jpg`,
      title: '스킵과 로퍼',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
  ];

  const slides2 = [
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/3.jpg`,
      title: '도쿄 리벤저스',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/4.jpg`,
      title: '스킵과 로퍼',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
  ];

  const slides3 = [
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/3.jpg`,
      title: '도쿄 리벤저스',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/4.jpg`,
      title: '스킵과 로퍼',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
  ];

  const slides4 = [
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/3.jpg`,
      title: '도쿄 리벤저스',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/4.jpg`,
      title: '스킵과 로퍼',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/1.jpg`,
      title: '최애의 아이',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/img/2.jpg`,
      title: '주술회전',
      genre: '애니메이션',
      releaseDate: '2023-08-23',
    },
  ];

  axios
    .get('https://a409-218-154-176-12.ngrok-free.app/movies')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return (
    <div className="p-5 lg:p-8 mt-5 px-3 font-['Pretendard-Bold']">
      <div className="flex flex-col gap-1 mb-8">
        {isSubscribed === true ? (
          <>
            <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
              최근 시청한 콘텐츠
            </div>
            <div>
              <Slider {...settings}>
                {slides1.map((slide, index) => (
                  <div key={index}>
                    <Slide
                      imageSrc={slide.imageSrc}
                      title={slide.title}
                      genre={slide.genre}
                      releaseDate={slide.releaseDate}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          따끈따끈한 신작
        </div>
        <div>
          <Slider {...settings}>
            {slides2.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  releaseDate={slide.releaseDate}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          주간 인기작
        </div>
        <div>
          <Slider {...settings}>
            {slides3.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  releaseDate={slide.releaseDate}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <div className="font-bold text-base mt-3 md:text-lg lg:text-xl">
          오타쿠가 세상을 구한다
        </div>
        <div>
          <Slider {...settings}>
            {slides4.map((slide, index) => (
              <div key={index}>
                <Slide
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                  genre={slide.genre}
                  releaseDate={slide.releaseDate}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {modal && (
        <Modal
          modalImage={modalImage}
          modalTitle={modalTitle}
          modalGenre={modalGenre}
          modalReleaseDate={modalReleaseDate}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Main;
