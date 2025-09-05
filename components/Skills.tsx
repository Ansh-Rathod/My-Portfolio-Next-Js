import { smallContainer, textH1, textH2 } from "pages/_app";
import ListItem from "./ListItem";
function Skills() {
  return (
    <div id="skills">
      <div className={`${smallContainer} border-t mt-20 mb-10 py-10`}>
        <h1 className={`${textH1}`}>What tech skills does he have?</h1>
        <p className="tracking-tighter lowercase   mt-4 text-[18px] text-slate-500   ">
          He knows these listed things but mostly uses Flutter, postgres, and
          Nextjs here and there for his apps. uses AI for writing code and
          figures out the code very quickly.
        </p>
        <br />
        <p className="tracking-tighter lowercase  text-[18px] text-slate-500   ">
          Sometimes he plays with the LLMS, Sometimes try to build a game with
          godot.
        </p>
      </div>
      <div className="flex flex-row  justify-center max-w-[900px] mx-auto border border-dashed py-10">
        {/* <div className="w-[150px] mx-4   ">
          <h1 className={`${textH2}`}>Skills</h1>
        </div> */}

        <div
          className="text-[18px] grid md:grid-cols-4 grid-cols-2
            pl-4 "
        >
          <div className="mr-14 mb-5">
            <h1 className=" lowercase font-bold tracking-wide mb-3  text-[18px] text-slate-900   ">
              Languages
            </h1>
            <ListItem name="dart" i={1} />
            <ListItem name="javascript" i={2} />
            <ListItem name="Typescript" i={3} />
            <ListItem name="python" i={4} />
            <ListItem name="html" i={5} />
            <ListItem name="css" i={6} />
          </div>
          <div className="mr-14   mb-5">
            <h1 className="tracking-tighter  font-bold  mb-3 lowercase text-[18px] text-slate-900   ">
              Frameworks
            </h1>
            <ListItem name="flutter" i={1} />
            <ListItem name="nextjs" i={1} />
            <ListItem name="Nodejs" i={1} />
            <ListItem name="Bunjs" i={1} />
            <ListItem name="Tailwind CSS" i={1} />
            <ListItem name="react" i={1} />
            <ListItem name="python flask" i={1} />
          </div>
          <div className="mr-14 mb-5">
            <h1 className="tracking-tighter lowercase font-bold  mb-3 text-[18px] text-slate-900   ">
              Databases
            </h1>
            <ListItem name="PostgreSql" i={1} />
            <ListItem name="firebase" i={1} />
            <ListItem name="supabase" i={1} />
            <ListItem name="Redis" i={1} />
            <ListItem name="mongodb" i={1} />
            <ListItem name="Sqlite" i={1} />
          </div>
          <div className="mr-14   mb-5">
            <h1 className="tracking-tighter  font-bold  mb-3 lowercase text-[18px] text-slate-900   ">
              Tools
            </h1>
            <ListItem name="docker" i={1} />
            <ListItem name="git & github" i={1} />
            <ListItem name="digital ocean" i={1} />
          </div>
        </div>
      </div>
      <div className={`${smallContainer} my-20 border-b py-10`}>
        <div className=" text-[17px] max-w-[600px]   py-2   text-gray-500 mx-auto">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ansh-Rathod"
            alt="GitHub Stats"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className=" text-[17px] max-w-[600px]   py-2   text-gray-500 mx-auto mb-10">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Ansh-Rathod"
            alt="GitHub Streak"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className={textH2}>time spent in the code editor:</h2>
        <p className=" mb-4"> (From 2 jan, 2024 to today)</p>

        <div className=" text-[17px] max-w-[600px]   py-2   text-gray-500 mx-auto">
          <img
            src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D23597%26project%3D%26in%3D0"
            alt="CodeTime Shield"
            className="w-[70%] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
