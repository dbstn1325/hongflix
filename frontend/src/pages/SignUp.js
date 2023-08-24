import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import axios from "axios";

export default function SignUp({
  inputValue,
  handleFocus,
  inputClear,
  isSignUp,
  url,
}) {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [isEmailWarringTextView, setIsEmailWarringTextView] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isEmailSameCheck, setIsEmailSameCheck] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isPasswordWarringTextView, setIsPasswordWarringTextView] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassWordFocused, setIsConfirmPassWordFocused] =
    useState(false);

  const [nickName, setNickName] = useState("");
  const [isNickNameFocused, setIsNickNameFocused] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState("");
  const [isPhoneNumberReg, setIsPhoneNumberReg] = useState(false);

  const [smsCode, setSmsCode] = useState("");
  const [isSmsCodeCheck, setIsSmsCodeCheck] = useState(false);
  const [isSmsCodeFocused, setIsSmsCodeFocused] = useState(false);
  const resSmsCode = "1234";

  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const phoneNumberInputValueReg = (e, setValue) => {
    e.preventDefault();
    setValue(
      e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );
  };

  const valueRegCheck = (reg, value) => {
    return reg.test(value);
  };

  //폰 번호 보내고 인증번호 요청
  const phoneNumberReq = async (e) => {
    e.preventDefault();
    setIsSmsCodeCheck(true);
    console.log(`phoneNumber : +82${phoneNumber}`);
    await axios
      .post(`${url}members/signup/message`, {
        phoneNumber: `+82${phoneNumber}`,
      })
      .then((res) => {
        resSmsCode = res.data;
      })
      .catch((err) => {
        alert(err);
      });
  };

  //email 중복확인 함수
  const sameCheckEmail = async (e) => {
    e.preventDefault();
    console.log(`email : ${email}`);
    await axios
      .post(`${url}members/signup/email-check`, { email: email })
      .then((res) => {
        console.log(res.data);
        setIsEmailSameCheck(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  //email 최종 체크 함수
  const isValidEmail = () => {
    //정규식 및 중복체크 모두 true일 시 최종 이메일 체크를 true로 변경
    valueRegCheck(emailReg, email) && isEmailSameCheck
      ? setEmailCheck(true)
      : setEmailCheck(false);
    //setEmailCheck가 false일 시 밑에 경고 메시지
    setIsEmailWarringTextView(!emailCheck);
  };
  //password 최종 체크 함수
  const isValidPassword = () => {
    password === confirmPassword &&
    password !== "" &&
    confirmPassword !== "" &&
    valueRegCheck(passwordReg, password)
      ? setPasswordCheck(true)
      : setPasswordCheck(false);
    setIsPasswordWarringTextView(!passwordCheck);
  };

  //인증번호 받고 진위여부 확인 후 phoneNumber 최종 체크 함수
  const isValidPhoneNumber = (e) => {
    e.preventDefault();
    console.log(smsCode);

    smsCode === resSmsCode
      ? setPhoneNumberCheck(true)
      : setPhoneNumberCheck(false);
    console.log("전화번호 최종 체크 : ", phoneNumberCheck);
  };
  //회원가입 완료 함수
  const FormSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: email,
      password: password,
      nickName: nickName,
      phoneNumber: phoneNumber,
    };
    isSignUp(userInfo, `${url}members/signup`);
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
    emailCheck && passwordCheck && nickName && phoneNumberCheck
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
  });
  useEffect(() => {
    if (phoneNumber.length > 12) {
      setIsPhoneNumberReg(true);
    } else {
      setIsPhoneNumberReg(false);
      setIsSmsCodeCheck(false);
    }

    console.log("phoneReg : ", isPhoneNumberReg);
  }, [phoneNumber]);
  return (
    <div
      className={`${styles.BackGround} flex flex-col justify-center items-center w-screen h-screen`}
    >
      <div
        className={`${styles.Container} flex flex-col justify-center items-center rounded-lg`}
      >
        <div
          className={`${styles.FormHeader} mt-10 text-center font-black flex flex-col gap-3 mb-3`}
        >
          <h1>HONG CHA</h1>
          <p>회원가입</p>
        </div>
        <form className={`${styles.Form}`} action="" method="POST">
          <div
            className={`${styles.FormItem} ${
              isEmailFocused ? styles.FormItemFocus : ""
            }`}
          >
            <label className={`${styles.FormLabel}`} htmlFor="">
              이메일
            </label>
            <div className={`${styles.FormInputBox}`}>
              <input
                className={`${styles.FormInput} `}
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
              {isEmailSameCheck ? null : (
                <button
                  className={`${styles.phoneNumberSmsBtn} rounded-md`}
                  onClick={(e) => {
                    sameCheckEmail(e);
                  }}
                >
                  중복확인
                </button>
              )}

              {isEmailFocused ? (
                <button
                  className={`${styles.InputButton} flex items-center rounded-full font-black`}
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
          {isEmailWarringTextView ? (
            <div className={`${styles.FormInputWarring}`}>
              이메일을 확인해주세요
            </div>
          ) : null}
          <div
            className={`${styles.FormItem} ${
              isNickNameFocused ? styles.FormItemFocus : ""
            }`}
          >
            <label className={`${styles.FormLabel}`} htmlFor="">
              이름
            </label>
            <div className={`relative ${styles.FormInputBox}`}>
              <input
                className={`${styles.FormInput}`}
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
              {isNickNameFocused ? (
                <button
                  className={`${styles.InputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setNickName);
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
            } flex flex-col w-80`}
          >
            <label className={`${styles.FormLabel}`} htmlFor="">
              비밀번호
            </label>
            <div className={`${styles.FormInputBox}`}>
              <input
                className={`${styles.FormInput} m-0 p-0`}
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
                  className={`${styles.InputButton} flex items-center rounded-full font-black`}
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
          {isPasswordWarringTextView ? (
            <div className={`${styles.FormInputWarring}`}>
              비밀번호를 확인해주세요
            </div>
          ) : null}
          <div
            className={`${styles.FormItem} ${
              isConfirmPassWordFocused ? styles.FormItemFocus : ""
            }`}
          >
            <label className={`${styles.FormLabel}`} htmlFor="">
              비밀번호 확인
            </label>
            <div className={`${styles.FormInputBox}`}>
              <input
                className={`${styles.FormInput}`}
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
              {isConfirmPassWordFocused ? (
                <button
                  className={`${styles.InputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setConfirmPassword);
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
              isPhoneNumberFocused ? styles.FormItemFocus : ""
            }`}
          >
            <label className={`${styles.FormLabel}`} htmlFor="">
              전화번호
            </label>
            <div className={`${styles.FormInputBox}`}>
              <input
                className={`${styles.FormInput}`}
                placeholder="전화번호를 입력해주세요"
                type="text"
                maxLength={`13`}
                value={phoneNumber || ""}
                onChange={(e) => {
                  phoneNumberInputValueReg(e, setPhoneNumber);
                }}
                onFocus={() => {
                  handleFocus(isPhoneNumberFocused, setIsPhoneNumberFocused);
                }}
                onBlur={() => {
                  handleFocus(isPhoneNumberFocused, setIsPhoneNumberFocused);
                }}
                disabled={phoneNumberCheck}
              />
              {isPhoneNumberFocused ? (
                <button
                  className={`${styles.InputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setPhoneNumber);
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  X
                </button>
              ) : null}
              {isPhoneNumberReg ? (
                <button
                  className={`${styles.phoneNumberSmsBtn} rounded-md`}
                  onClick={(e) => {
                    phoneNumberReq(e);
                  }}
                  disabled={phoneNumberCheck}
                >
                  인증
                </button>
              ) : null}
            </div>
          </div>
          {isSmsCodeCheck && isPhoneNumberReg ? (
            <div
              className={`${styles.FormItem} ${
                isSmsCodeFocused ? styles.FormItemFocus : ""
              }`}
            >
              <label className={`${styles.FormLabel}`} htmlFor="">
                인증번호
              </label>
              <div className={`${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder="인증번호를 입력해주세요"
                  type="text"
                  maxLength={`4`}
                  value={smsCode || ""}
                  disabled={phoneNumberCheck}
                  onChange={(e) => {
                    inputValue(e, setSmsCode);
                  }}
                  onFocus={() => {
                    handleFocus(isSmsCodeFocused, setIsSmsCodeFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isSmsCodeFocused, setIsSmsCodeFocused);
                  }}
                />
                {isSmsCodeFocused ? (
                  <button
                    className={`${styles.InputButton} flex items-center rounded-full font-black`}
                    onMouseDown={(e) => {
                      inputClear(e, setSmsCode);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    X
                  </button>
                ) : null}
                <button
                  className={`${styles.phoneNumberSmsBtn} rounded-md`}
                  onClick={(e) => {
                    isValidPhoneNumber(e);
                  }}
                  disabled={phoneNumberCheck}
                >
                  전송
                </button>
              </div>
            </div>
          ) : null}

          <div className="mb-10">
            <button
              className={`${styles.FormBtn} ${
                isButtonActive ? styles.FormBtnCompletion : ""
              } flex items-center justify-cente w-full`}
              type="submit"
              disabled={!isButtonActive}
              onClick={(e) => {
                FormSubmit(e);
              }}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
