import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './admin/AdminHome';
import AdminMembers from './admin/AdminMembers';
import AdminMovies from './admin/AdminMovies';
import AdminSetting from './admin/AdminSetting';
import AdminContents from './admin/AdminContents';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            <>
              <AdminHome></AdminHome>
            </>
          }
        ></Route>
        <Route
          path="/admin/movies"
          element={
            <>
              <AdminMovies></AdminMovies>
            </>
          }
        ></Route>
        <Route
          path="/admin/members"
          element={
            <>
              <AdminMembers></AdminMembers>
            </>
          }
        ></Route>
        <Route
          path="/admin/setting"
          element={
            <>
              <AdminSetting></AdminSetting>
            </>
          }
        ></Route>
        <Route
          path="/admin/movies/contents/:movieTitle/:movieId"
          element={
            <>
              <AdminContents></AdminContents>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
