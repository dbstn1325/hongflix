import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";

export default function AdminContentCreateModal({
  setCreateModalView,
  movieId,
  fetchContents,
  apiUrl,
}) {
  console.log(`movieId : ${movieId}`);
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [accessUrl, setAccessUrl] = useState("");
  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const fileHandler = (e, setValue) => {
    console.log(e.target.files);
    setValue(e.target.files[0]);
  };

  const createMovie = async () => {
    const formData = new FormData();
    const contentCreateReqDto = {
      title: title,
      explanation: explanation,
    };
    console.log(title, explanation);
    const blob = new Blob([JSON.stringify(contentCreateReqDto)], {
      type: "application/json",
    });
    formData.append("file", accessUrl);
    formData.append("contentCreateReqDto", blob, "contentCreateReqDto.json");
    await axios
      .post(
        `${apiUrl}movies/${movieId}`,
        formData,
        {
          header: { "Content-Type": "multipart/form-data" },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        fetchContents();
        setCreateModalView(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setCreateModalView(false);
      });
  };
  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full fixed md:w-2/3 rounded-lg gap-3 border pt-5 pb-5`}
    >
      <h1 className="text-3xl">콘텐츠 등록</h1>
      <form className="flex w-4/5 flex-col justify-center gap-2" action="POST">
        <label htmlFor="title">콘텐츠 제목</label>
        <input
          value={title}
          onChange={(e) => {
            inputHandler(e, setTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="content">내용</label>
        <input
          value={explanation}
          onChange={(e) => {
            inputHandler(e, setExplanation);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">영상</label>
        <input
          onChange={(e) => {
            fileHandler(e, setAccessUrl);
          }}
          className="p-3 border rounded-lg"
          type="file"
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
