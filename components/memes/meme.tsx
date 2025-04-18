import { motion } from "framer-motion";
import Image from "next/image";
const textUpAnimate = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.6 },
  },
};
function Meme({ i, meme, onTag }: any) {
  return (
    <motion.div
      // variants={textUpAnimate}
      // initial={{ y: 50 * (i * 0.7), opacity: 0 }}
      // whileInView={{ y: 0, transition: { duration: 0.3, delay: i * 0.4 } }}
      // viewport={{ once: true, amount: 0.7 }}
      className={` items-center
       font-apple tracking-tighter lowercase rounded-2xl flex flex-col border-[1px] border-gray-200 shadow
       `}
    >
      <div className="bg-white w-full  rounded-tl-2xl rounded-tr-2xl py-6 items-center flex justify-center">
        <div className=" select-none  w-[400px] relative h-[400px] flex justify-end mobile:h-[300px] mobile:w-[280px]">
          {meme.type !== "image" ? (
            <video autoPlay muted controlsList="play" controls loop>
              <source src={meme.path} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={meme.path}
              alt="image"
              objectFit="contain"
              layout="fill"
              className="unselectable"
            />
          )}
        </div>
      </div>

      <div className="bg-slate-50 bg-opacity-30   rounded-bl-2xl rounded-br-2xl w-full   px-4 pb-4 pt-2 flex flex-col items-start justify-start">
        <h1 className="font-apple tracking-tighter lowercase mt-2 text-base font-semibold">
          {meme.title}
        </h1>
        <div className="flex flex-wrap mt-3">
          {meme.tags.map((tag: string, i: number) => (
            <div
              key={tag}
              onClick={() => onTag(tag)}
              className="select-none cursor-pointer hover:shadow text-gray-500 mr-3 mb-2 px-2 py-1 text-sm bg-white border border-gray-300 rounded-md"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex  flex-row items-center justify-between w-full mt-3">
          <h1 className="text-gray-400 text-sm text-[12px]">
            {meme.created_on}
          </h1>
          <a href={meme.link} target="_blank" rel="noreferrer">
            <div className="bg-blue-500 lowercase text-xs cursor-pointer first-line:hover:shadow-lg py-1.5  px-3 text-white rounded-xl">
              View on
              <i className="pl-2 fa-brands fa-twitter" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Meme;
