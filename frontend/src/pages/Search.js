import React, { useState, useEffect, useRef, useMemo } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const movies = useMemo(
    () => [
      {
        movieTitle: '최애의 아이',
        imageUrl: `${process.env.PUBLIC_URL}/img/1.jpg`,
      },
      {
        movieTitle: '주술회전',
        imageUrl: `${process.env.PUBLIC_URL}/img/2.jpg`,
      },
      {
        movieTitle: '주술회전2',
        imageUrl: `${process.env.PUBLIC_URL}/img/2.jpg`,
      },
      {
        movieTitle: '도쿄 리벤저스',
        imageUrl: `${process.env.PUBLIC_URL}/img/3.jpg`,
      },
      {
        movieTitle: '스킵과 로퍼',
        imageUrl: `${process.env.PUBLIC_URL}/img/4.jpg`,
      },
    ],
    []
  );

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = movies.filter((movie) =>
        movie.movieTitle.includes(debouncedSearchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm, movies]);

  return (
    <div className="p-5 lg:p-8 font-['Pretendard-Bold']">
      <div className="font-black text-xl lg:text-2xl">검색</div>
      <div className="mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="찾고 싶은 작품을 입력하세요."
          className="mt-2 border border-gray-300 px-3 py-1 rounded-md w-72 focus:outline-none focus:ring-1 focus:border-blue-100"
        />
      </div>
      <hr />
      <div className="mt-5 font-semibold">검색 결과</div>
      {searchResults.length > 0 ? (
        <div className="mt-3">
          {searchResults.map((movie, index) => (
            <div key={index} className="flex space-x-3 my-3 relative">
              <div
                className="relative sm:w-full md:w-1/5 lg:w-1/5"
                onMouseEnter={() => setHoveredMovie(movie)} // 마우스 올렸을 때 추가
                onMouseLeave={() => setHoveredMovie(null)} // 마우스 나갔을 때 추가
              >
                <img
                  src={movie.imageUrl}
                  alt={movie.movieTitle}
                  className="hover:brightness-50"
                />
                {hoveredMovie === movie && ( // 조건부 렌더링
                  <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                    {movie.movieTitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-3">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
