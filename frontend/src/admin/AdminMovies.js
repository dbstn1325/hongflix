import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import styles from "./Admin.module.css";
import axios from "axios";
import AdminMoviesTable from "./components/AdminMoviesTable";
import AdminMovieCreateModal from "./components/AdminMovieCreateModal";
import { useNavigate } from "react-router-dom";
import AdminMovieUpdateModal from "./components/AdminMovieUpdateModal";

export default function AdminMovies() {
  const [updateModalView, setUpdateModalView] = useState(false);
  const [deleteModalView, setDeleteModalView] = useState(false);
  const [createModalView, setCreateModalView] = useState(false);
  const [seleteId, setSeletId] = useState(null);

  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "제목",
      subTitle: "영화부제목",
      content: "내용",
      genre: "장르",
    },
    {
      id: 1,
      title: "제목2",
      subTitle: "영화부제목",
      content: "내용",
      genre: "장르",
    },
    {
      id: 3,
      title: "제목3",
      subTitle: "영화부제목",
      content: "내용",
      genre: "장르",
    },
    {
      id: 11,
      title: "제목11",
      subTitle: "영화부제목",
      content: "내용",
      genre: "장르",
    },
  ]);

  const modalSwitch = (e, value, setValue, id) => {
    e.preventDefault();
    !value ? setValue(true) : setValue(false);
    setSeletId(id);
  };

  console.log(`seletId : ${seleteId}`);

  const updateText = () => {
    const movieIndex = movies.findIndex((el) => {
      return el["id"] == seleteId;
    });
    return movieIndex;
  };
  console.log(updateText());

  const apiUrl = "http://localhost:8080/";
  const navigator = useNavigate();

  // const fetchMovies = async () => {
  //   await axios
  //     .get(`${apiUrl}/movies`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setMovies(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  return (
    <div className={`w-screen h-screen flex flex-col md:flex-row`}>
      <AdminNavBar></AdminNavBar>
      <div className="flex flex-col items-center w-full h-5/6 md:h-full md:w-3/4">
        <header className={`w-4/5 h-28 bg-white flex items-center`}>
          <h1 className=" text-3xl">영화 목록</h1>
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
                className={`${styles.contentFormCreateBtn}`}
                onClick={(e) => {
                  modalSwitch(e, createModalView, setCreateModalView);
                }}
              >
                영화 생성
              </button>
            </div>
          </form>
        </section>
        <section className={`border w-4/5 rounded-md`}>
          <h1 className="text-3xl md:mt-10 md:mb-10 p-3">{movies.length}건</h1>
          <AdminMoviesTable
            movies={movies}
            navigator={navigator}
            modalSwitch={modalSwitch}
            updateModalView={updateModalView}
            setUpdateModalView={setUpdateModalView}
          ></AdminMoviesTable>
        </section>
        {createModalView ? (
          <AdminMovieCreateModal
            setCreateModalView={setCreateModalView}
            apiUrl={apiUrl}
          ></AdminMovieCreateModal>
        ) : null}
        {updateModalView ? (
          <AdminMovieUpdateModal
            setUpdateModalView={setUpdateModalView}
            movie={movies[updateText()]}
            apiUrl={apiUrl}
          ></AdminMovieUpdateModal>
        ) : null}
      </div>
    </div>
  );
}
