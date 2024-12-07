import { motion } from "framer-motion";
import ListItem from "./ListItem";
function Skills() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      viewport={{ once: true, amount: 0.4 }}
      id="skills"
      className="py-[50px] w-screen max-w-full desktop:container"
    >
      <div className="mx-auto max-w-[600px] mb-20  px-6 mobile:px-6  py-2">
        <h1 className="font-poppins uppercase text-3xl font-bold mobile:text-center">
          Blah Blah...
        </h1>
        <p className="text-[16px] font-apple  text-gray-500 mt-4">
          He knows these listed things but mostly uses Flutter, postgres, and
          Nextjs here and there for his apps. uses AI for writing code and
          figures out the code very quickly.
        </p>
        <br />
        <p className="text-[16px] font-apple  text-gray-500 ">
          Sometimes he plays with the LLMS, Sometimes try to build a game with
          godot.
        </p>
      </div>
      <div className="flex flex-row mobile:flex-col justify-center max-w-[900px] mx-auto mobile:px-3">
        <div className="w-[150px] mx-4 mobile:mb-14 mobile:w-full mobile:mx-0">
          <h1 className="font-poppins uppercase text-3xl font-bold mobile:text-center">
            Skills
          </h1>
        </div>

        <div
          className="text-[18px] grid grid-cols-4 mini-laptop:grid-cols-2
           tablet:grid-cols-2 mobile:grid-cols-2 mobile:pl-8"
        >
          <div className="mr-14 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
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
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
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
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
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
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Tools
            </h1>
            <ListItem name="docker" i={1} />
            <ListItem name="git & github" i={1} />
            <ListItem name="digital ocean" i={1} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
