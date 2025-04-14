import ListItem from "./ListItem";
function Skills() {
  return (
    <div
      id="skills"
      className="py-[50px] w-screen max-w-full desktop:container "
    >
      <div className="mx-auto max-w-[600px] mb-20     py-2 px-6">
        <h1 className="font-poppins lowercase text-3xl font-bold ">
          What tech skills does he have?
        </h1>
        <p className="font-apple tracking-tighter lowercase   mt-4 text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
          He knows these listed things but mostly uses Flutter, postgres, and
          Nextjs here and there for his apps. uses AI for writing code and
          figures out the code very quickly.
        </p>
        <br />
        <p className="font-apple tracking-tighter lowercase  text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
          Sometimes he plays with the LLMS, Sometimes try to build a game with
          godot.
        </p>
      </div>
      <div className="flex flex-row mobile:flex-col justify-center max-w-[900px] mx-auto px-6 ">
        <div className="w-[150px] mx-4 mobile:mb-14 mobile:w-full mobile:mx-0">
          <h1 className="font-poppins lowercase text-3xl font-bold mobile:text-center">
            Skills
          </h1>
        </div>

        <div
          className="text-[18px] grid grid-cols-4 mini-laptop:grid-cols-2
           tablet:grid-cols-2 mobile:grid-cols-2 mobile:pl-4 "
        >
          <div className="mr-14 mb-5">
            <h1 className="font-apple  lowercase font-bold tracking-wide mb-3  text-[18px] text-slate-900 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
              Languages
            </h1>
            <ListItem name="dart" i={1} />
            <ListItem name="javascript" i={2} />
            <ListItem name="Typescript" i={3} />
            <ListItem name="python" i={4} />
            <ListItem name="html" i={5} />
            <ListItem name="css" i={6} />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple tracking-tighter  font-bold  mb-3 lowercase text-[18px] text-slate-900 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
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
            <h1 className="font-apple tracking-tighter lowercase font-bold  mb-3 text-[18px] text-slate-900 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
              Databases
            </h1>
            <ListItem name="PostgreSql" i={1} />
            <ListItem name="firebase" i={1} />
            <ListItem name="supabase" i={1} />
            <ListItem name="Redis" i={1} />
            <ListItem name="mongodb" i={1} />
            <ListItem name="Sqlite" i={1} />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple tracking-tighter  font-bold  mb-3 lowercase text-[18px] text-slate-900 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]">
              Tools
            </h1>
            <ListItem name="docker" i={1} />
            <ListItem name="git & github" i={1} />
            <ListItem name="digital ocean" i={1} />
          </div>
        </div>
      </div>
      <div className="max-w-[600px] mx-auto px-6">
        <div className="mt-10 font-proxima text-[17px] max-w-[600px]   py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ansh-Rathod"
            alt="GitHub Stats"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className=" font-proxima text-[17px] max-w-[600px]   py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Ansh-Rathod"
            alt="GitHub Streak"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className=" text-[20px] mt-10">time spent in the code editor:</h2>
        <p className=" mb-4"> (From 2 jan, 2024 to today)</p>

        <div className=" font-proxima text-[17px] max-w-[600px]   py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
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
