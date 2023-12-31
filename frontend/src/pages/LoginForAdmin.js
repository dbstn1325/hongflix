/** @format */

import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';

export default function LoginForAdmin({
  inputValue,
  handleFocus,
  inputClear,
  isLogin,
  url,
}) {
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const FormSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: email,
      password: password,
    };
    isLogin(loginInfo, `${url}members/admin/login`, '/admin');

    console.log(`email : ${email}\npassword : ${password}`);
  };

  useEffect(() => {
    email && password ? setIsButtonActive(true) : setIsButtonActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps

  },[email,password]);
  return (
    <>
      <div
        className={`${styles.BackGround} flex flex-col justify-center items-center w-screen h-screen font-['Pretendard-Bold'] bg-black`}
      >
        <div
          className={`${styles.Container} flex flex-col justify-center items-center rounded-lg`}
        >
          <div
            className={`${styles.FormHeader} mt-10 text-center font-black flex flex-col gap-3 mb-5`}
          >
            <h1 className='mb-1'>Hongflix</h1>
            <p>관리자 로그인</p>
          </div>
          <form className={`${styles.Form}`} action='' method='POST'>
            <div
              className={`${styles.FormItem} ${
                isEmailFocused ? styles.FormItemFocus : ''
              } flex flex-col w-80`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                이메일
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='이메일 입력해주세요'
                  type='email'
                  value={email || ''}
                  onChange={(e) => {
                    inputValue(e, setEmail);
                  }}
                  onFocus={() => {
                    handleFocus(isEmailFocused, setIsEmailFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isEmailFocused, setIsEmailFocused);
                  }}
                />
                {isEmailFocused ? (
                  <div
                    className={`${styles.InputButton} flex items-center justify-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={`${styles.FormItem} ${
                isPassWordFocused ? styles.FormItemFocus : ''
              } relative`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                비밀번호
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='비밀번호를 입력해주세요'
                  type='password'
                  value={password || ''}
                  onChange={(e) => {
                    inputValue(e, setPassword);
                  }}
                  onFocus={() => {
                    handleFocus(isPassWordFocused, setIsPassWordFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isPassWordFocused, setIsPassWordFocused);
                  }}
                />
                {isPassWordFocused ? (
                  <div
                    className={`${styles.InputButton} flex items-center justify-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className='mb-10'>
              <button
                className={`${styles.FormBtn} ${
                  isButtonActive ? styles.FormBtnCompletion : ''
                } flex items-center justify-cente w-full`}
                disabled={!isButtonActive}
                onClick={(e) => {
                  FormSubmit(e);
                }}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
