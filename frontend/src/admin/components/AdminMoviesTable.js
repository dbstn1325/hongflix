/** @format */

import React from 'react';
import styles from '../Admin.module.css';

export default function AdminMoviesTable({
  movies,
  navigator,
  updateModalView,
  setUpdateModalView,
  deleteModalView,
  setDeleteModalView,
  detailModalView,
  setDeatilModalView,
  modalSwitch,
}) {
  console.log(movies);
  return (
    <div>
      <table className='w-full text-center rounded-lg'>
        <thead className={`${styles.adminTableHead} border`}>
          <tr>
            <th className='p-2 border w-2/12'>제목</th>
            <th className='p-2 border w-1/12'>연령</th>
            <th className='p-2 border'>내용</th>
            <th className='p-2 border w-2/12'>장르</th>
            <th className='p-2 border w-1/12'>상세</th>
            <th className='p-2 border w-1/12'>삭제</th>
            <th className='p-2 border w-1/12'>삭제</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {movies.map((el, i) => {
            return (
              <tr key={i}>
                <td
                  className='p-2 border max-w-[60px] whitespace-nowrap overflow-x-auto '
                  onClick={() => {
                    navigator(`contents/${el['title']}/${el['id']}`);
                  }}
                >
                  {el['title']}
                </td>
                <td className='p-2 border min-w-[60px]'>{el['subTitle']}</td>
                <td className='p-2 border whitespace-nowrap overflow-x-auto max-w-[60px]'>
                  {el['explanation']}
                </td>
                <td className='p-2 border min-w-[60px]'>{el['genre']}</td>
                <td className='border min-w-[50px]'>
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        detailModalView,
                        setDeatilModalView,
                        +el['id']
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                      />
                    </svg>
                  </button>
                </td>
                <td className='p-2 border min-w-[50px]'>
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        updateModalView,
                        setUpdateModalView,
                        +el['id']
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                      />
                    </svg>
                  </button>
                </td>
                <td className='p-2 border min-w-[50px]'>
                  <button
                    onClick={(e) => {
                      modalSwitch(
                        e,
                        deleteModalView,
                        setDeleteModalView,
                        +el['id']
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
