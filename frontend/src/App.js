import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
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
              ></SignUp>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
