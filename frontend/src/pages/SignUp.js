/** @format */

import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignUp({
  inputValue,
  handleFocus,
  inputClear,
  isSignUp,

  url,
}) {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [isEmailWarringTextView, setIsEmailWarringTextView] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isEmailSameCheck, setIsEmailSameCheck] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isPasswordWarringTextView, setIsPasswordWarringTextView] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassWordFocused, setIsConfirmPassWordFocused] =
    useState(false);

  const [nickName, setNickName] = useState('');
  const [isNickNameFocused, setIsNickNameFocused] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState('');
  const [isPhoneNumberReg, setIsPhoneNumberReg] = useState(false);

  const [smsCode, setSmsCode] = useState('');
  const [isSmsCodeCheck, setIsSmsCodeCheck] = useState(false);
  const [isSmsCodeFocused, setIsSmsCodeFocused] = useState(false);
  const [resSmsCode, setResSmsCode] = useState('');

  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const phoneNumberInputValueReg = (e, setValue) => {
    e.preventDefault();
    setValue(
      e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, '')
    );
  };

  const valueRegCheck = (reg, value) => {
    return reg.test(value);
  };

  //폰 번호 보내고 인증번호 요청
  const phoneNumberReq = async (e) => {
    e.preventDefault();
    setIsSmsCodeCheck(true);
    console.log(`+82${phoneNumber.replaceAll('-', '')}`);
    await axios
      .post(
        `${url}members/signup/message`,
        {
          phoneNumber: `+82${phoneNumber.replaceAll('-', '')}`,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setResSmsCode(res.data.data);
        console.log(res.data.data);
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
      .post(
        `${url}members/signup/email-check`,
        { email: email },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.data);
        alert(res.data.data);
        if (res.data.status === 200) {
          setIsEmailSameCheck(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  //email 최종 체크 함수
  const isValidEmail = () => {
    //setEmailCheck가 false일 시 밑에 경고 메시지
    setIsEmailWarringTextView(!emailCheck);
    //정규식 및 중복체크 모두 true일 시 최종 이메일 체크를 true로 변경
    valueRegCheck(emailReg, email) && isEmailSameCheck
      ? setEmailCheck(true)
      : setEmailCheck(false);
  };
  //password 최종 체크 함수
  const isValidPassword = () => {
    password === confirmPassword &&
    password !== '' &&
    confirmPassword !== '' &&
    valueRegCheck(passwordReg, password)
      ? setPasswordCheck(true)
      : setPasswordCheck(false);
    setIsPasswordWarringTextView(!passwordCheck);
  };

  //인증번호 받고 진위여부 확인 후 phoneNumber 최종 체크 함수
  const isValidPhoneNumber = (e) => {
    e.preventDefault();
    console.log(smsCode);

    if (smsCode === resSmsCode) {
      setPhoneNumberCheck(true);
      alert('인증 완료');
    } else {
      setPhoneNumberCheck(false);
      alert('인증번호를 확인해주세요');
    }

    console.log('전화번호 최종 체크 : ', phoneNumberCheck);
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
    isSignUp(userInfo, `${url}members/signup`, `/login`);
  };

  useEffect(() => {
    isValidEmail();
    isValidPassword();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isEmailFocused,
    isEmailSameCheck,
    isPassWordFocused,
    confirmPassword,
    isPassWordFocused,
    isConfirmPassWordFocused,
    isNickNameFocused,
  ]);

  useEffect(() => {
    if (!password && !confirmPassword) {
      setIsPasswordWarringTextView(false);
    }
    if (!email) {
      setIsEmailWarringTextView(false);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps

  },[
    isEmailFocused,
    isEmailSameCheck,
    isPassWordFocused,
    confirmPassword,
    isPassWordFocused,
    isConfirmPassWordFocused,
    isNickNameFocused,
  ]);
  useEffect(() => {
    emailCheck && passwordCheck && nickName && phoneNumberCheck
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
          // eslint-disable-next-line react-hooks/exhaustive-deps
  },[
    isEmailFocused,
    isEmailSameCheck,
    isPassWordFocused,
    confirmPassword,
    isPassWordFocused,
    isConfirmPassWordFocused,
    isNickNameFocused,
  ]);
  useEffect(() => {
    if (phoneNumber.length > 12) {
      setIsPhoneNumberReg(true);
    } else {
      setIsPhoneNumberReg(false);
      setIsSmsCodeCheck(false);
    }
    console.log('phoneReg : ', isPhoneNumberReg);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  // 인증번호 3분 타이머
  const [seconds, setSeconds] = useState(180);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0 && !phoneNumberCheck && resSmsCode !== '') {
        setSeconds(seconds - 1);
      }
    }, 1000);
    if (seconds === 0) {
      setIsPhoneNumberReg(false);
      setResSmsCode('');
      setPhoneNumber('');
      alert('인증 버튼을 다시 눌러주세요');
      setSeconds(180);
    }
    return () => {
      if (phoneNumber) {
        clearInterval(timer);
      }
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, resSmsCode]);

  return (
    <>
      <div className='sc-hYbzA-d iHTwyS w-full fixed flex flex-col gap-5'>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_0.6c211609.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_1.a4453576.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_2.0b4bed7c.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_3.3d72e3ed.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_4.6242ed78.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_0.6c211609.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_1.a4453576.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_2.0b4bed7c.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_3.3d72e3ed.png")',
          }}
        ></div>
        <div
          className={`${styles.backgroundImage}`}
          style={{
            backgroundImage:
              'url("https://web-prod.laftel.net/3.4.7/assets/BG_4.6242ed78.png")',
          }}
        ></div>
      </div>
      <div
        className={`${styles.BackGround} flex flex-col justify-center items-center w-screen h-screen font-['Pretendard-Bold']`}
      >
        <div
          className={`${styles.Container} flex flex-col justify-center items-center rounded-lg`}
        >
          <div
            className={`${styles.FormHeader} mt-10 text-center font-black flex flex-col gap-3 mb-3`}
          >
            <h1 className='text-2xl'>
              <Link to={'/'}>Hongflix</Link>
            </h1>
            <p>회원가입</p>
          </div>
          <form className={`${styles.Form}`} action='' method='POST'>
            <div
              className={`${styles.FormItem} ${
                isEmailFocused ? styles.FormItemFocus : ''
              }`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                이메일
              </label>
              <div className={`${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput} `}
                  placeholder='이메일 입력해주세요'
                  type='email'
                  disabled={emailCheck}
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
            {isEmailWarringTextView ? (
              <div className={`${styles.FormInputWarring}`}>
                이메일을 확인해주세요
              </div>
            ) : null}
            <div
              className={`${styles.FormItem} ${
                isNickNameFocused ? styles.FormItemFocus : ''
              }`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                이름
              </label>
              <div className={`relative ${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='이름을 입력해주세요'
                  type='text'
                  value={nickName || ''}
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
              } flex flex-col w-80`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                비밀번호
              </label>
              <div className={`${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput} m-0 p-0`}
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
            {isPasswordWarringTextView ? (
              <div className={`${styles.FormInputWarring}`}>
                비밀번호를 확인해주세요
              </div>
            ) : null}
            <div
              className={`${styles.FormItem} ${
                isConfirmPassWordFocused ? styles.FormItemFocus : ''
              }`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                비밀번호 확인
              </label>
              <div className={`${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='비밀번호를 한번 더 입력해주세요'
                  type='password'
                  value={confirmPassword || ''}
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
                isPhoneNumberFocused ? styles.FormItemFocus : ''
              }`}
            >
              <label className={`${styles.FormLabel}`} htmlFor=''>
                전화번호
              </label>
              <div className={`${styles.FormInputBox}`}>
                <input
                  className={`${styles.FormInput}`}
                  placeholder='전화번호를 입력해주세요'
                  type='text'
                  maxLength={`13`}
                  value={phoneNumber || ''}
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
                  isSmsCodeFocused ? styles.FormItemFocus : ''
                }`}
              >
                <label className={`${styles.FormLabel}`} htmlFor=''>
                  인증번호
                </label>
                <div className={`${styles.FormInputBox}`}>
                  <input
                    className={`${styles.FormInput}`}
                    placeholder='인증번호를 입력해주세요'
                    type='text'
                    maxLength={`4`}
                    value={smsCode || ''}
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
            {isSmsCodeCheck && isPhoneNumberReg && !phoneNumberCheck ? (
              <p className='mb-2'>
                남은 시간: {minutes < 10 ? '0' : ''}
                {minutes}:{remainingSeconds < 10 ? '0' : ''}
                {remainingSeconds}
              </p>
            ) : null}

            <div className='mb-10'>
              <button
                className={`${styles.FormBtn} ${
                  isButtonActive ? styles.FormBtnCompletion : ''
                } flex items-center justify-cente w-full`}
                type='submit'
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
    </>
  );
}
