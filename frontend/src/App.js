import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {
  const url = `http://localhost:8080/`;
  const [isLogined, setIsLogined] = useState(false);

  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputClear = (e, setValue) => {
    e.preventDefault();
    setValue("");
  };
  const isSignUp = async (userInfo, url) => {
    await axios
      .post(url, {
        email: userInfo["email"],
        password: userInfo["password"],
        nickName: userInfo["nickName"],
        phoenNumber: userInfo["phoneNumber"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isLogin = async (loginInfo, url) => {
    await axios
      .post(url, { email: loginInfo["email"], password: loginInfo["password"] })
      .then((res) => {
        console.log(res.data);
        setIsLogined(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isLogin={isLogin}
                url={url}
              ></Login>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <SignUp
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
                isSignUp={isSignUp}
                url={url}
              ></SignUp>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
