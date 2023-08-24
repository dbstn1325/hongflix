import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // 로그인 여부 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 스크롤 시 헤더 배경색 변경
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 sticky top-0 z-50  ${
        isScrolled ? 'bg-indigo-950' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? 'none' : '1px solid black',
        transition: 'background-color 0.3s ease-in',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 items-center font-['Pretendard-Bold'] ">
          <Link
            to="/"
            className={`text-xl font-black  ${
              isScrolled ? 'text-white' : 'text-indigo-950'
            }`}
          >
            Hongflix
          </Link>
          <Link
            to="/category"
            className={`text-sm ${
              isScrolled ? 'text-white' : 'text-indigo-950'
            }`}
          >
            카테고리
          </Link>
          <Link
            to="/search"
            className={`text-sm ${
              isScrolled ? 'text-white' : 'text-indigo-950'
            }`}
          >
            검색
          </Link>
        </div>
        <nav className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                className={`text-sm ${
                  isScrolled ? 'text-white' : 'text-indigo-950'
                }`}
              >
                마이 페이지
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm ${
                  isScrolled ? 'text-white' : 'text-indigo-950'
                }`}
              >
                로그인
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
