import React from "react";
import AdminNavBar from "./AdminNavBar";
import styles from "./Admin.module.css";

export default function AdminContent() {
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
                      class="h-4 w-4 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
              <button className={`${styles.contentFormCreateBtn}`}>
                영화 생성
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
