import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './Modal';

const Category = () => {
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

  return (
    <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
      <div className="font-black text-xl lg:text-2xl">테마 추천</div>
      <div className="mt-5 mb-10">
        <div className="font-semibold text-lg lg:text-xl mb-2">
          달달한 로맨스
        </div>
        <div className="w-auto">
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
      </div>
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">호러/스릴러</div>
        <div className="w-auto">
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
      <div className="my-5">
        <div className="font-semibold text-lg lg:text-xl mb-2">다큐멘터리</div>
        <div className="w-auto">
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

export default Category;
