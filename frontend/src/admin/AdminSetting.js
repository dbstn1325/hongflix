import React from "react";
import AdminLeftBar from "./AdminNavBar";

export default function AdminSetting() {
  return (
    <div className={`w-screen h-screen flex flex-col md:flex-row`}>
      <AdminLeftBar></AdminLeftBar>
      <div>셋팅</div>
    </div>
  );
}
