import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const loginFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    email && password ? setIsButtonActive(true) : setIsButtonActive(false);
  });
  return (
    <>
      <div className={`${styles.loginBackGround}`}>
        <div className={`${styles.loginContainer}`}>
          <div className={`${styles.loginFormHeader}`}>
            <h1>HONG CHA</h1>
            <p>동시방영 신작부터 역대 인기작까지</p>
            <p>한 곳에서 편안-하게!</p>
          </div>
          <form className={`${styles.loginForm}`} action="" method="POST">
            <div
              className={`${styles.loginFormItem} ${
                isEmailFocused ? styles.loginFormItemFocus : ""
              }`}
            >
              <label className={`${styles.loginFormLabel}`} htmlFor="">
                이메일
              </label>
              <input
                className={`${styles.loginFormInput}`}
                placeholder="이메일 입력해주세요"
                type="email"
                value={email || ""}
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
            </div>
            <div
              className={`${styles.loginFormItem} ${
                isPassWordFocused ? styles.loginFormItemFocus : ""
              }`}
            >
              <label className={`${styles.loginFormLabel}`} htmlFor="">
                비밀번호
              </label>
              <input
                className={`${styles.loginFormInput}`}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password || ""}
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
            </div>
            <p className={`${styles.loginFormText}`}>
              계정이 없으시다면..<Link to={"/join"}> 가입하기</Link>
            </p>
            <button
              className={`${styles.loginFormBtn} ${
                isButtonActive ? styles.loginFormBtnCompletion : ""
              }`}
              disabled={isButtonActive}
              onClick={(e) => {
                loginFormSubmit(e);
              }}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
}