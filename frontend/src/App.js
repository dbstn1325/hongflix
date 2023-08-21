import "./App.css";
import AdminHome from "./admin/AdminHome";
import { Route, Routes } from "react-router-dom";
import AdminContent from "./admin/AdminContent";
import AdminSetting from "./admin/AdminSetting";
import AdminMembers from "./admin/AdminMembers";

function App() {
  return (
    <div>
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
          path="/admin/contents"
          element={
            <>
              <AdminContent></AdminContent>
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
          path="/admin/members"
          element={
            <>
              <AdminMembers></AdminMembers>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
