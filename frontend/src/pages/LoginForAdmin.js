import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export default function LoginForAdmin({
  inputValue,
  handleFocus,
  inputClear,
  isLogin,
  url,
}) {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const FormSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: email,
      password: password,
    };
    isLogin(loginInfo, `${url}member/admin/login`);

    console.log(`Email : ${email}\npassword : ${password}`);
  };

  useEffect(() => {
    email && password ? setIsButtonActive(true) : setIsButtonActive(false);
  });
  return (
    <>
      <div
        className={`${styles.BackGround} flex flex-col justify-center items-center w-screen h-screen`}
      >
        <div
          className={`${styles.Container} flex flex-col justify-center items-center rounded-lg`}
        >
          <div className={`${styles.FormHeader} mt-10 text-center font-black`}>
            <h1>HONG CHA</h1>
            <p>동시방영 신작부터 역대 인기작까지</p>
            <p>한 곳에서 편안-하게!</p>
          </div>
          <form className={`${styles.Form}`} action="" method="POST">
            <div
              className={`${styles.FormItem} ${
                isEmailFocused ? styles.FormItemFocus : ""
              } flex flex-col w-80`}
            >
              <label className={`${styles.FormLabel}`} htmlFor="">
                이메일
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder="이메일 입력해주세요"
                  type="Email"
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
                {isEmailFocused ? (
                  <button
                    className={`${styles.InputButton} flex items-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setEmail);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
            <div
              className={`${styles.FormItem} ${
                isPassWordFocused ? styles.FormItemFocus : ""
              } relative`}
            >
              <label className={`${styles.FormLabel}`} htmlFor="">
                비밀번호
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.FormInput}`}
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
                {isPassWordFocused ? (
                  <button
                    className={`${styles.InputButton} flex items-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
            <p className={`${styles.FormText} mt-2`}>
              계정이 없으시다면..<Link to={"/signup"}> 가입하기</Link>
            </p>
            <div className="mb-10">
              <button
                className={`${styles.FormBtn} ${
                  isButtonActive ? styles.FormBtnCompletion : ""
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
