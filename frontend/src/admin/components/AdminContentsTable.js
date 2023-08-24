import React, { useEffect, useState } from "react";
import styles from "../Admin.module.css";
import { useNavigate } from "react-router-dom";

export default function AdminContentsTable({
  contents,
  movieTitle,
  movieId,
  modalSwitch,
  updateModalView,
  setUpdateModalView,
}) {
  console.log(movieId);

  return (
    <div>
      <table className="border w-full text-center rounded-lg">
        <thead className={`${styles.adminTableHead} border`}>
          <tr>
            <th className="p-2 border">콘텐츠 제목</th>
            <th className="p-2 border">내용</th>
            <th className="p-2 border">영상</th>
            <th className="p-2 border">영화명</th>
            <th className="p-2 border">삭제</th>
            <th className="p-2 border">수정</th>
          </tr>
        </thead>
        <tbody className="">
          {contents.map((el, i) => {
            return (
              <tr key={i}>
                <td className="p-2 border">{el["title"]}</td>
                <td className="p-2 border">{el["explanation"]}</td>
                <td className="p-2 border">{el["accessUrl"]}</td>
                <td className="p-2 border">{movieTitle}</td>

                <td className="p-2 border w-14">
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        updateModalView,
                        setUpdateModalView,
                        el["id"]
                      );
                    }}
                  >
                    수정
                  </button>
                </td>
                <td className="p-2 border w-14">
                  <button>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
