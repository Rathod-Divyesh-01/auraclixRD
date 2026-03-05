import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogOut, PlusCircle } from "lucide-react";
import { assets, dummyUserData } from "../assets/assets";
import MenuItems from "./MenuItems";
import { UserButton, useClerk } from "@clerk/react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  // const user = useClerk().user;
  // const fullName = user ? `${user.firstName} ${user.lastName}` : "Guest User";
  const user = dummyUserData;
  const { signOut } = useClerk();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed sm:static top-0 left-0 h-full w-64 bg-gray-200 p-4 transform ${
        sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      }transition-all duration-300 ease-in-out flex flex-col justify-between gap-5 z-40`}
    >
      <div className="w-full">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="w-26 mx-auto my-2  cursor-pointer"
        />
        <hr className="border-gray-400 mb-4" />
        {/* Menu Items */}
        <MenuItems setSidebarOpen={setSidebarOpen} />

        {/*Create Post Button */}
        <Link
          to="/create-post"
          onClick={() => setSidebarOpen(false)}
          className="w-full"
        >
          <div className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 flex items-center justify-center gap-2 hover:bg-blue-600 cursor-pointer">
            <PlusCircle /> Create Post
          </div>
        </Link>
      </div>

      {/* User Profile Section */}

      <div className="w-full border-t border-gray-200 flex items-center justify-between gap-3 px-7 p-4  text-gray-700 rounded-r-md ">
        <div className="flex gap-2 cursor-pointer items-center">
          {<UserButton /> ? (
            <img
              src={assets.sample_profile}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <img
              src={assets.sample_profile}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          )}
          <div>
            <h1 className="text-sm font-medium">{user.full_name}</h1>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
          <LogOut
            className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
            onClick={{ signOut }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
