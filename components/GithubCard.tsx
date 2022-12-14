import React from "react";
import Image from "next/image";
import { projects } from "../data/projects";
function GithubCard() {
  return (
    <div
      className="w-[500px] h-[300px] 
  bg-gradient-to-tr from-[#1e252e] to-[#010409]  p-4 rounded-xl

  "
    >
      <h1 className="text-lg font-poppins text-center text-gray-100 my-4">
        GITHUB PROFILE
      </h1>
      <div className="flex flex-row">
        <div>
          <div
            className="border-b-[3px] border-l-[2px] border-l-blue-300 border-red-400 rounded-full shadow-lg
       shadow-[#9f6b64] relative w-[150px] h-[150px] "
          >
            <Image
              src="https://avatars.githubusercontent.com/u/67627096?v=4"
              layout="fill"
              className="rounded-full "
              alt="profile"
              unoptimized
            />
          </div>
        </div>
        <div className=" font-bold tracking-wide px-10">
          <p className="text-white font-medium mt-5 mb-2">Ansh-Rathod</p>
          <p className="text-gray-300 font-medium text-[15px]">
            Consistanly building open-source projects since 2020.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GithubCard;
