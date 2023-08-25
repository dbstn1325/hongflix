import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminContentUpdateModal({
  setUpdateModalView,
  content,
  fetchContents,
  apiUrl,
}) {
  console.log(`contentId : ${content["id"]}`);
  const [title, setTitle] = useState(content["title"]);
  const [accessUrl, setAccessUrl] = useState(content["accessUrl"]);
  const [explanation, setExplanation] = useState(content["explanation"]);
  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const fileHandler = (e, setValue) => {
    console.log(e.target.files);
    setValue(e.target.files[0]);
  };
  const updateContent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const contentUpdateReqDto = {
      title: title,
      explanation: explanation,
    };
    console.log(title, explanation);
    const blob = new Blob([JSON.stringify(contentUpdateReqDto)], {
      type: "application/json",
    });
    formData.append("file", accessUrl);
    formData.append("contentUpdateReqDto", blob, "contentUpdateReqDto.json");
    await axios
      .put(
        `${apiUrl}contents/${content["id"]}`,
        formData,
        {
          header: { "Content-Type": "multipart/form-data" },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        fetchContents();
        setUpdateModalView(false);
      })
      .catch((err) => {
        console.log(err);
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
        <label htmlFor="">기존 콘텐츠</label>
        <div className="p-3 border rounded-lg">
          <Link to={accessUrl}>Link</Link>
        </div>

        <label htmlFor="title">변경할 콘텐츠</label>
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
            setUpdateModalView(false);
          }}
        >
          닫기
        </button>
        <button
          onClick={(e) => {
            updateContent(e);
          }}
          className={`${styles.contentModalCreateBtn}`}
        >
          등록
        </button>
      </div>
    </div>
  );
}
