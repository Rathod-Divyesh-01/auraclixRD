import { Loader } from "lucide-react";
import { assets } from "../assets/assets.js";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="min-h-screen flex flex-coll md:flex-row">
        {/* backgraund image*/}
        <img
          src={assets.bgImage}
          alt=" "
          className="absolute top-0 left-0 -z-1 w-full h-full object-cover "
        />
      </div>
      <Loader className="animate-spin size-10" />
    </div>
  );
};

export default Loading;
