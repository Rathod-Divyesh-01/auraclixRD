import React from "react";
import { assets } from "../assets/assets.js";
import { Star } from "lucide-react";
import { SignIn } from "@clerk/react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-coll md:flex-row">
      {/* backgraund image*/}
      <img
        src={assets.bgImage}
        alt=" "
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover "
      />

      {/* left side : Branding*/}

      <div className=" flex-1 flex flex-col items-start justify-between p-8 md:p-10 lg:p-40">
        <img src={assets.logo} alt="Logo" className="h-12 object-contain" />
        <div className="flex flex-col items-start">
          <img
            src={assets.group_users}
            alt="Group Users"
            className="h-8 md:h-10"
          />
          <div className="flex">
            <div className="flex items-center gap-1 md:gap-2 mt-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 md:size-4.5 text-transparent fill-amber-500"
                  />
                ))}
            </div>
            <p className="text-sm md:text-base text-gray-500">
              used by 12k+ devlopers
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl  md:pb-2 font-bold  bg-gradient-to-r from-indigo-900 to-indigo-800 text-transparent bg-clip-text mb-4 ">
            More than just friends: truly connected
          </h1>
          <p className="text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md">
            Connect with global community on AuraClixRD.
          </p>
        </div>
        <span className="md:h-10"> </span>
      </div>

      {/* right side : Login form*/}

      <div className="flex-1 flex items-center justify-center p-8 md:p-10 lg:p-40">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
