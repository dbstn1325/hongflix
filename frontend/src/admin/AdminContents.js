import React, { useEffect, useState } from "react";
import AdminNavBar from "./components/AdminNavBar";
import styles from "./Admin.module.css";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import AdminContentsTable from "./components/AdminContentsTable";
import AdminContentCreateModal from "./components/AdminContentCreateModal";
import AdminContentUpdateModal from "./components/AdminContentUpdateModal";
import AdminContentDeleteModal from "./components/AdminContentDeleteModal";

const apiUrl = "https://kwyrmjf86a.execute-api.ap-northeast-2.amazonaws.com/";

export default function AdminContents() {
  const { movieTitle, movieId } = useParams();
  const [contents, setContents] = useState([]);
  const [createModalView, setCreateModalView] = useState(false);
  const [updateModalView, setUpdateModalView] = useState(false);
  const [deleteModalView, setDeleteModalView] = useState(false);
  const [seleteId, setSeletId] = useState(null);
  console.log(`movieId : ${movieId}`);

  const updateText = () => {
    const contentIndex = contents.findIndex((el) => {
      return el["id"] == seleteId;
    });
    return contentIndex;
  };

  const fetchContents = async () => {
    await axios
      .get(`${apiUrl}contents/${movieId}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setContents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const modalSwitch = (e, value, setValue, id) => {
    e.preventDefault();
    !value ? setValue(true) : setValue(false);
    setSeletId(id);
  };

  return (
    <div className={`w-screen h-screen flex flex-col md:flex-row`}>
      <AdminNavBar></AdminNavBar>
      <div className="flex flex-col items-center w-full h-5/6 md:h-full md:w-3/4">
        <header className={`w-4/5 h-28 bg-white flex items-center`}>
          <h1 className=" text-3xl">콘텐츠 목록</h1>
        </header>
        <section className="w-4/5 h-32 bg-white flex items-center">
          <form className="w-full flex flex-col" action="">
            <input className="w-full border h-10 text-xl p-1" type="text" />
            <div
              className={`${styles.contentFormBtnBox} flex flex-row justify-center items-center relative `}
            >
              <div
                className={`${styles.contentFormSerchBtnBox} flex p-5 gap-3 w-full items-center justify-center`}
              >
                <button
                  className={`${styles.contentFormSerchBtn} flex items-center justify-center`}
                >
                  <div>
                    <svg
                      className="h-4 w-4 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="10" cy="10" r="7" />
                      <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                  </div>
                  검색
                </button>
                <button className={`${styles.contentFormSerchBtn}`}>
                  초기화
                </button>
              </div>
              <button
                onClick={(e) => {
                  modalSwitch(e, createModalView, setCreateModalView);
                }}
                className={`${styles.contentFormCreateBtn}`}
              >
                콘텐츠 생성
              </button>
            </div>
          </form>
        </section>
        <section className={`border w-4/5 rounded-md`}>
          <AdminContentsTable
            contents={contents}
            movieTitle={movieTitle}
            movieId={movieId}
            modalSwitch={modalSwitch}
            updateModalView={updateModalView}
            setUpdateModalView={setUpdateModalView}
            deleteModalView={deleteModalView}
            setDeleteModalView={setDeleteModalView}
            setSeletId={seleteId}
          ></AdminContentsTable>
        </section>
        {createModalView ? (
          <AdminContentCreateModal
            setCreateModalView={setCreateModalView}
            movieId={movieId}
            fetchContents={fetchContents}
            apiUrl={apiUrl}
          ></AdminContentCreateModal>
        ) : null}
        {updateModalView ? (
          <AdminContentUpdateModal
            setUpdateModalView={setUpdateModalView}
            content={contents[updateText()]}
            fetchContents={fetchContents}
            apiUrl={apiUrl}
          ></AdminContentUpdateModal>
        ) : null}
        {deleteModalView ? (
          <AdminContentDeleteModal
            setDeleteModalView={setDeleteModalView}
            seleteId={seleteId}
            fetchContents={fetchContents}
            apiUrl={apiUrl}
          ></AdminContentDeleteModal>
        ) : null}
      </div>
    </div>
  );
}
