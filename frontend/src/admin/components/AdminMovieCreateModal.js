import axios from "axios";
import styles from "../Admin.module.css";
import React, { useEffect, useState } from "react";

export default function AdminMovieCreateModal({
  setCreateModalView,
  apiUrl,
  fetchMovies,
}) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [accessKey, setAccessKey] = useState(null);
  const [explanation, setExplanation] = useState("");

  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const fileHandler = (e) => {
    setAccessKey(e.target.files[0]);
  };

  const createMovie = async (e) => {
    e.preventDefault();

    const movieCreateReqDto = {
      title: title,
      subTitle: subTitle,
      explanation: explanation,
      genre: genre,
    };
    const formData = new FormData();
    const blob = new Blob([JSON.stringify(movieCreateReqDto)], {
      type: "application/json",
    });

    formData.append("file", accessKey);
    formData.append("movieCreateReqDto", blob, "movieCreateReqDto.json");

    await axios
      .post(
        `${apiUrl}movies`,
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
        setCreateModalView(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full fixed md:w-2/3 rounded-lg gap-3 border pt-5 pb-5`}
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
        <label htmlFor="title">영화 링크</label>
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
            setCreateModalView(false);
          }}
        >
          닫기
        </button>
        <button
          onClick={(e) => {
            createMovie(e);
          }}
          className={`${styles.contentModalCreateBtn}`}
        >
          등록
        </button>
      </div>
    </div>
  );
}
