import { memes } from "data/memes";
import HorizontalScroll from "./horizontal-scroll";
import Image from "next/image";
function MemesIntro() {
  return (
    <div>
      <div className="py-20 px-4 max-w-[600px] mx-auto">
        <h1 className="font-poppins pb-1 text-3xl uppercase text-black ">
          TECH RELATED MEMEz HE MADE
        </h1>

        <p className="font-proxima text-slate-500 text-[18px] mt-4">
          He created {memes.length} memes and shared them on twitter, he thinks
          memes are the best way to explain on internet about the situation.
        </p>
      </div>
      <HorizontalScroll>
        {memes
          .sort((a, b) => b.likes - a.likes)
          .map((meme: any) => (
            <div
              key={meme.id}
              className=" cursor-pointer select-none mobile:w-[calc(100vw-66px)]  w-[300px]    ml-6 rounded-2xl "
            >
              <div
                className={` items-center
       font-apple rounded-2xl flex flex-col border-[1px] border-gray-200 shadow
       `}
              >
                <div className="bg-white w-full  rounded-tl-2xl rounded-tr-2xl px-2 items-center flex justify-center">
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
                  <h1 className="font-apple mt-2 text-base font-semibold">
                    {meme.title}
                  </h1>

                  <div className="flex  flex-row items-center justify-between w-full mt-3">
                    <h1 className="text-gray-400 text-sm text-[12px]">
                      {meme.created_on}
                    </h1>
                    <a href={meme.link} target="_blank" rel="noreferrer">
                      <div className="bg-blue-500 uppercase text-xs cursor-pointer first-line:hover:shadow-lg py-1.5  px-3 text-white rounded-xl">
                        View on
                        <i className="pl-2 fa-brands fa-twitter" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </HorizontalScroll>
      <div className="my-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
        <p>Message from him:</p>
        <div className="bg-[#0B82FE] text-white p-4 rounded-3xl mt-2">
          <p>
            these Memez with Z i made huh, I believe memes are the better
            explainers than some professors. memes are supposed to relate to the
            audience.
          </p>
          <br />
          <p>one meme speaks thousand of words than a whole big paragraph.</p>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
}

export default MemesIntro;
