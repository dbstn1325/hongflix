import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminMovieUpdateModal({
  setUpdateModalView,
  apiUrl,
  movie,
  movieIndex,
  fetchMovies,
}) {
  const [title, setTitle] = useState(movie["title"]);
  const [subTitle, setSubTitle] = useState(movie["subTitle"]);
  const [genre, setGenre] = useState(movie["genre"]);
  const [accessKey, setAccessKey] = useState(movie["accessKey"]);
  const [explanation, setExplanation] = useState(movie["explanation"]);
  console.log(`movieIndex : ${movieIndex}`);
  console.log(`movidId : ${movie["id"]}`);

  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const fileHandler = (e) => {
    console.log(e.target.files);
    setAccessKey(e.target.files[0]);
  };

  const updateMovie = async (e) => {
    e.preventDefault();
    const movieUpdateReqDto = {
      title: title,
      subTitle: subTitle,
      explanation: explanation,
      genre: genre,
      accessKey: "",
    };
    const blob = new Blob([JSON.stringify(movieUpdateReqDto)], {
      type: "application/json",
    });
    console.log(accessKey);
    const formData = new FormData();
    console.log(movieUpdateReqDto);

    formData.append("file", accessKey);
    formData.append("movieUpdateReqDto", blob, "movieUpdateReqDto.json");

    await axios
      .put(
        `${apiUrl}movies/${movie["id"]}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        fetchMovies();
        setUpdateModalView(false);
      })
      .catch((err) => {
        console.log(`ERROR!! ${err}`);
        alert(err);
        setUpdateModalView(false);
      });
  };

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full fixed md:w-2/3 rounded-lg gap-3 border pt-5 pb-5`}
    >
      <h1 className="text-3xl">영화 수정</h1>
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
          value={subTitle}
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
        <label htmlFor="title">기존 영화</label>
        <div className="p-3 border rounded-lg">
          <Link to={accessKey}>Link</Link>
        </div>
        <label htmlFor="">수정할 영화</label>
        <input
          onChange={(e) => {
            fileHandler(e);
          }}
          className="p-3 border rounded-lg"
          type="file"
        />
        <label htmlFor="title">내용</label>
        <textarea
          value={explanation}
          onChange={(e) => {
            inputHandler(e, setExplanation);
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
