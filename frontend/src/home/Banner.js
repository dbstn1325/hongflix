import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  // 캐러셀 이미지 크기 & 타이틀
  const Slide = ({ imageSrc, text }) => (
    <div className="relative">
      <img className="w-full" src={imageSrc} alt="carousel" />
      <div className="absolute -translate-x-2/4 px-5 py-1.5 rounded-3xl bottom-5 left-2/4 text-xs md:text-base lg:text-sm text-center text-white  bg-indigo-950">
        {text}
      </div>
    </div>
  );

  // 오른쪽 화살표
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-2.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'>'}
    </button>
  );

  // 왼쪽 화살표
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2.5 top-1/2 text-4xl font-bold text-black -translate-y-2/4 z-10"
      onClick={onClick}
      type="button"
    >
      {'<'}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    { imageSrc: `${process.env.PUBLIC_URL}/img/b1.jpg`, text: '최애의 아이' },
    { imageSrc: `${process.env.PUBLIC_URL}/img/b2.jpg`, text: '주술회전' },
    // Add more slide objects as needed
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Slide imageSrc={slide.imageSrc} text={slide.text} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
