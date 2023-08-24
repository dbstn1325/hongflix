import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";

export default function AdminMovieUpdateModal({
  setUpdateModalView,
  apiUrl,
  movie,
}) {
  const [title, setTitle] = useState(movie["title"]);
  const [subTitle, setSubTitle] = useState(movie["subTitle"]);
  const [genre, setGenre] = useState(movie["genre"]);
  const [accessKey, setAccessKey] = useState(movie["accessKey"]);
  const [content, setContent] = useState(movie["content"]);
  console.log(movie);

  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const updateMovie = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full h-1/3 fixed md:w-2/3 md:h-3/6 rounded-lg gap-3 border`}
    >
      <h1 className="text-3xl">영화 등록</h1>
      <form className="flex w-4/5 flex-col justify-center gap-2" action="POST">
        <label htmlFor="title">영화 제목</label>
        <input
          value={title}
          onChange={(e) => {
            inputHandler(e, setTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="content">영화 부제목</label>
        <input
          value={content}
          onChange={(e) => {
            inputHandler(e, setSubTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">장르</label>
        <input
          value={genre}
          onChange={(e) => {
            inputHandler(e, setGenre);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">영화 링크</label>
        <input
          value={accessKey}
          onChange={(e) => {
            inputHandler(e, setAccessKey);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">내용</label>
        <textarea
          value={content}
          onChange={(e) => {
            inputHandler(e, setContent);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
      </form>
      <div className="flex gap-5">
        <button
          className={`${styles.contentModalCreateBtn}`}
          onClick={() => {
            setUpdateModalView(false);
          }}
        >
          닫기
        </button>
        <button
          onClick={(e) => {
            updateMovie(e);
          }}
          className={`${styles.contentModalCreateBtn}`}
        >
          등록
        </button>
      </div>
    </div>
  );
}
