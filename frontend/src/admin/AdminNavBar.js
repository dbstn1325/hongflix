import styles from "./Admin.module.css";

import { Link, useLocation } from "react-router-dom";

export default function AdminLeftBar() {
  const location = useLocation();

  return (
    <div
      className={`${styles.navBarBackground} md:w-1/4 md:h-full w-screen h-auto pb-5 flex justify-center md:block`}
    >
      <nav
        className={`${styles.navBarContainer} flex md:flex-col w-full items-center justify-center gap-3 ml-3 md:ml-0`}
      >
        <div
          className={`${styles.navBarProfileContainer} flex justify-center md:justify-start w-2/6 h-full md:w-5/6 gap-3`}
        >
          <div className={`${styles.navProfileImg} `}>
            <img className={`bg-black w-16 h-16 rounded-xl`} src="" alt="" />
          </div>
          <div className={`${styles.navProfileText} mt-5 hidden md:block`}>
            <p className={`${styles.navProfileItem} md:pt-1`}>Administrator</p>
            <p className={`${styles.navProfileItem} md:pt-1`}>닉네임</p>
          </div>
        </div>
        <ul
          className={`flex md:flex-col w-full items-center justify-center gap-1 md:gap-0`}
        >
          <li className={`md:w-5/6 w-1/6`}>
            <Link
              to={"/admin"}
              className={`${styles.navItem} ${
                location.pathname === "/admin" ? styles.navItemCur : ""
              } flex flex-col md:flex-row items-center pt-3 pb-3 pl-1`}
            >
              <div className={`md:mr-5`}>
                <svg
                  className="h-8 w-8"
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
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              </div>
              <p className={`md:flex-1 hidden md:block`}>홈</p>
              <div className={`${styles.navItemArrow} hidden md:block`}>
                <svg
                  className="h-8 w-8"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </Link>
          </li>
          <li className={`md:w-5/6 w-1/6`}>
            <Link
              to={"/admin/movies"}
              className={`${styles.navItem} ${
                location.pathname === "/admin/movies" ? styles.navItemCur : ""
              } flex flex-col md:flex-row items-center pt-3 pb-3 pl-1`}
            >
              <div className={`md:mr-5`}>
                <svg
                  className="h-8 w-8"
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
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="4" x2="8" y2="20" />
                  <line x1="16" y1="4" x2="16" y2="20" />
                  <line x1="4" y1="8" x2="8" y2="8" />
                  <line x1="4" y1="16" x2="8" y2="16" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="16" y1="8" x2="20" y2="8" />
                  <line x1="16" y1="16" x2="20" y2="16" />
                </svg>
              </div>
              <p className={`md:flex-1 hidden md:block`}>영화 관리</p>
              <div className={`${styles.navItemArrow} hidden md:block`}>
                <svg
                  className="h-8 w-8"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </Link>
          </li>
          <li className={`md:w-5/6 w-1/6`}>
            <Link
              to={"/admin/members"}
              className={`${styles.navItem} ${
                location.pathname === "/admin/members" ? styles.navItemCur : ""
              } flex flex-col md:flex-row items-center pt-3 pb-3 pl-1`}
            >
              <div className={`md:mr-5`}>
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className={`md:flex-1 hidden md:block`}>구독자 관리</p>
              <div className={`${styles.navItemArrow} hidden md:block`}>
                <svg
                  className="h-8 w-8"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </Link>
          </li>
          <li className={`md:w-5/6 w-1/6`}>
            <Link
              to={"/admin/setting"}
              className={`${styles.navItem} ${
                location.pathname === "/admin/setting" ? styles.navItemCur : ""
              } flex flex-col md:flex-row items-center pt-3 pb-3 pl-1`}
            >
              <div className={`md:mr-5`}>
                <svg
                  className="h-8 w-8"
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
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className={`md:flex-1 hidden md:block`}>설정</p>
              <div className={`${styles.navItemArrow} hidden md:block`}>
                <svg
                  className="h-8 w-8"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
