import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";

export default function AdminContentUpdateModal({
  setUpdateModalView,
  apiUrl,
}) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [content, setContent] = useState("");
  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  console.log(apiUrl);
  const createMovie = async () => {
    await axios
      .post(`${apiUrl}/movies`, {
        title: title,
        subTitle: subTitle,
        genre: genre,
        accessKey: accessKey,
        content: content,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full h-1/3 fixed md:w-2/3 md:h-3/6 rounded-lg gap-3 border`}
    >
      <h1 className="text-3xl">콘텐츠 등록</h1>
      <form className="flex w-4/5 flex-col justify-center gap-2" action="POST">
        <label htmlFor="title">콘텐츠 제목</label>
        <input
          onClick={(e) => {
            inputHandler(e, setTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="content">내용</label>
        <input
          onClick={(e) => {
            inputHandler(e, setSubTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">영상</label>
        <input
          onClick={(e) => {
            inputHandler(e, setGenre);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">영화명</label>
        <input
          onClick={(e) => {
            inputHandler(e, setAccessKey);
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
          onClick={() => {
            createMovie();
          }}
          className={`${styles.contentModalCreateBtn}`}
        >
          등록
        </button>
      </div>
    </div>
  );
}
