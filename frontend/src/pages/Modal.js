import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({
  modalImage,
  modalTitle,
  modalGenre,
  modalReleaseDate,
  closeModal,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // 로그인도 하고 구독도 한 경우
    if (isLoggedIn && isSubscribed) {
      navigate('/search');
    }
    // 로그인 안 한 경우
    else if (!isLoggedIn) {
      alert('로그인을 해주세요.');
      navigate('/login');
    }
    // 로그인은 했는데 구독은 안 한 경우
    else if (isLoggedIn && !isSubscribed) {
      alert('구독 결제를 해주세요.');
      navigate('/mypage');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="relative flex flex-col justify-center w-3/4 h-4/5 bg-indigo-950 rounded-md shadow-2xl lg:w-1/3 lg:h-3/4"
        onClick={closeModal}
      >
        <div>
          <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={closeModal}
          >
            ❌
          </button>
          <img
            src={modalImage}
            alt="modal"
            className="w-2/3 mx-auto my-5 sm:w-2/5 md:w-1/3 lg:w-1/3"
          />
        </div>
        <div className="text-white p-3 text-xs justify-center sm:text-sm md:text-base lg:text-lg text-center">
          <div className="font-semibold">{modalTitle}</div>
          <div className="">장르: {modalGenre}</div>
          <div className="">공개일: {modalReleaseDate}</div>
          <div className="py-4 w-full break-words">
            dfafasfafffdsfadskfjdskfjadsfkldsjfklasfjakldsfjasdklfjdasklfkfjdlkfjaslfkfjdlkfjasfkljdklflfkfjdlkfjasfkljdklffkljdklfjakfjasdklfjdasklfkfjdlkfjaslfkfjdlfjasdklfjdasklfkfjdlkfjaslfkfjdlfjasdklfjdasklfkfjdlkfjaslfkfjdlfjaㅇㄴㄹㄴㅇㄹㅇㄴㅁㄹ
          </div>
        </div>
        <div className="p-3">
          <button
            className="bg-white text-indigo-950 rounded-sm mb-3 w-full font-bold py-1 text-sm md:text-base lg:text-xl"
            onClick={handleSubscribe}
          >
            지금 바로 보러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
