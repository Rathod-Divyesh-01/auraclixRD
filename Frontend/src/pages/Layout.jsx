import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets.js";
import Loading from "./Loading.jsx";

const Layout = () => {
  let user = dummyUserData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return user ?(
    <div className="w-full h-screen flex ">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 bg-slate-100"> 
        <Outlet />
      </div>
      {sidebarOpen ? (
        <X
          className="absolute top-3 right-3 p-3 z-50 bg-white rounded-md  text-gray-600 size-6 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      ) : (
        <Menu
          className="absolute  top-3 right-3 p-3 z-50 bg-white rounded-md text-gray-600  size-6 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      )}
    </div>
  ):(
    <Loading/>
  );
};

export default Layout;
