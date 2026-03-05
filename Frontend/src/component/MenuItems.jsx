import React from "react";
import { Home, MessageCircle, Search, User, Edit } from "lucide-react";
import { NavLink } from "react-router-dom";
import { menuItemsData } from "../assets/assets";

const MenuItems = ({ setSidebarOpen }) => {
  return (
    <div className="flex flex-col gap-4">
        {/* Menu Items */}
        {menuItemsData.map(({to,label,Icon}) =>(
            <NavLink  
              key={to}
              to={to}
              end={to === "/"}
             onClick={() => setSidebarOpen(false)}
             className={({ isActive }) =>
          `flex items-center gap-3 PX-3.5 PY-2 cursor-pointer text-gray-700 rounded-r-md ${
            isActive ? "bg-indigo-50 p-2 text-indigo-700" : "hover:bg-gray-100 hover:p-0.5 "
          }`
        }>
                <Icon className="w-5 h-5"/>  
                {label}
        </NavLink>
        ))}
    </div>
  );
};

export default MenuItems;