import React from "react";
import ListItem from "./ListItem";

function Skills() {
  return (
    <div
      id="skills"
      className="py-[100px] w-screen max-w-full desktop:container"
    >
      <div className="flex flex-row mobile:flex-col justify-center max-w-[900px] mx-auto mobile:px-3">
        <div className="w-[150px] mx-4 mobile:mb-14 mobile:w-full mobile:mx-0">
          <h1 className="font-poppins uppercase text-3xl font-bold mobile:text-center">
            Skills
          </h1>
          <p className="font-proxima text-[18px]"></p>
        </div>

        <div
          className="text-[18px] grid grid-cols-4 mini-laptop:grid-cols-2
           tablet:grid-cols-2 mobile:grid-cols-2 mobile:pl-8"
        >
          <div className="mr-14 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Languages
            </h1>
            <ListItem name="dart" star />
            <ListItem name="javascript" star />
            <ListItem name="Typescript" star />
            <ListItem name="python" />
            <ListItem name="html" />
            <ListItem name="css" />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Frameworks
            </h1>
            <ListItem name="flutter" star />
            <ListItem name="nextjs" star />
            <ListItem name="Nodejs" star />
            <ListItem name="Tailwind CSS" star />
            <ListItem name="Bootstrap" />
            <ListItem name="Nuxtjs" />
            <ListItem name="react" />
            <ListItem name="python flask" />
          </div>
          <div className="mr-14 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Databases
            </h1>
            <ListItem name="PostgreSql" star />
            <ListItem name="firebase" star />
            <ListItem name="supabase" star />
            <ListItem name="Redis" star />
            <ListItem name="mongodb" />
            <ListItem name="Sqlite" />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Tools
            </h1>
            <ListItem name="docker" star />
            <ListItem name="git & github" star />
            <ListItem name="kubernetes" star />
            <ListItem name="digital ocean" />
            <ListItem name="heroku" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
