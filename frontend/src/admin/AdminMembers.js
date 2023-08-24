import React from "react";
import AdminNavBar from "./AdminNavBar";
import AdminSetting from "./AdminSetting";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminMembers() {
  return (
    <div className={`w-screen h-screen flex flex-col md:flex-row`}>
      <AdminNavBar></AdminNavBar>
      <div>유저관리</div>
    </div>
  );
}
