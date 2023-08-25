import React, { useEffect, useState } from "react";
import styles from "./Join.module.css";

export default function Join() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [isEmailWarringTextView, setIsEmailWarringTextView] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isPasswordWarringTextView, setIsPasswordWarringTextView] =
    useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassWordFocused, setIsConfirmPassWordFocused] =
    useState(false);
  const [nickName, setNickName] = useState("");
  const [isNickNameFocused, setIsNickNameFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const valueRegCheck = (reg, value) => {
    return reg.test(value);
  };

  const isValidPassword = () => {
    password === confirmPassword &&
    password !== "" &&
    confirmPassword !== "" &&
    valueRegCheck(passwordReg, password)
      ? setPasswordCheck(true)
      : setPasswordCheck(false);
    setIsPasswordWarringTextView(!passwordCheck);
  };

  const isValidEmail = () => {
    valueRegCheck(emailReg, email) ? setEmailCheck(true) : setEmailCheck(false);
    setIsEmailWarringTextView(!emailCheck);
  };

  const joinFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `email : ${email}\npassword : ${password}\nnickName : ${nickName}`
    );
  };

  useEffect(() => {
    isValidPassword();
  }, [password, confirmPassword, isPassWordFocused, isConfirmPassWordFocused]);
  useEffect(() => {
    isValidEmail();
  }, [email, isEmailFocused]);
  useEffect(() => {
    if (!password && !confirmPassword) {
      setIsPasswordWarringTextView(false);
    }
    if (!email) {
      setIsEmailWarringTextView(false);
    }
  });
  useEffect(() => {
    emailCheck && passwordCheck && nickName
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
    console.log(isButtonActive);
  });

  return (
    <>
      <div className={`${styles.joinBackGround}`}>
        <div className={`${styles.joinContainer}`}>
          <div className={`${styles.joinFormHeader}`}>
            <h1>HONG CHA</h1>
            <p>회원가입</p>
          </div>
          <form className={`${styles.joinForm}`} action="" method="POST">
            <div
              className={`${styles.joinFormItem} ${
                isEmailFocused ? styles.joinFormItemFocus : ""
              }`}
            >
              <label className={`${styles.joinFormLabel}`} htmlFor="">
                이메일
              </label>
              <input
                className={`${styles.joinFormInput}`}
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
            {isEmailWarringTextView ? (
              <div className={`${styles.joinFormInputWarring}`}>
                이메일을 확인해주세요
              </div>
            ) : null}
            <div
              className={`${styles.joinFormItem} ${
                isNickNameFocused ? styles.joinFormItemFocus : ""
              }`}
            >
              <label className={`${styles.joinFormLabel}`} htmlFor="">
                이름
              </label>
              <input
                className={`${styles.joinFormInput}`}
                placeholder="이름을 입력해주세요"
                type="text"
                value={nickName || ""}
                onChange={(e) => {
                  inputValue(e, setNickName);
                }}
                onFocus={() => {
                  handleFocus(isNickNameFocused, setIsNickNameFocused);
                }}
                onBlur={() => {
                  handleFocus(isNickNameFocused, setIsNickNameFocused);
                }}
              />
            </div>
            <div
              className={`${styles.joinFormItem} ${
                isPassWordFocused ? styles.joinFormItemFocus : ""
              }`}
            >
              <label className={`${styles.joinFormLabel}`} htmlFor="">
                비밀번호
              </label>
              <input
                className={`${styles.joinFormInput}`}
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
            {isPasswordWarringTextView ? (
              <div className={`${styles.joinFormInputWarring}`}>
                비밀번호를 확인해주세요
              </div>
            ) : null}
            <div
              className={`${styles.joinFormItem} ${
                isConfirmPassWordFocused ? styles.joinFormItemFocus : ""
              }`}
            >
              <label className={`${styles.joinFormLabel}`} htmlFor="">
                비밀번호 확인
              </label>
              <input
                className={`${styles.joinFormInput}`}
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                value={confirmPassword || ""}
                onChange={(e) => {
                  inputValue(e, setConfirmPassword);
                }}
                onFocus={() => {
                  handleFocus(
                    isConfirmPassWordFocused,
                    setIsConfirmPassWordFocused
                  );
                }}
                onBlur={() => {
                  handleFocus(
                    isConfirmPassWordFocused,
                    setIsConfirmPassWordFocused
                  );
                }}
              />
            </div>
            <button
              className={`${styles.joinFormBtn} ${
                isButtonActive ? styles.joinFormBtnCompletion : ""
              } `}
              type="submit"
              disabled={!isButtonActive}
              onClick={(e) => {
                joinFormSubmit(e);
              }}
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
