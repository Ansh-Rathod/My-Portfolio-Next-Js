import { memes } from "data/memes";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meme from "./meme";

const textUpAnimate = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
function MemesComponent() {
  const [search, setSearch] = useState<string>("");
  const [selectedTag, setselectedTag] = useState<string>("popular");
  const [searchedTags, setSearchedTags] = useState<string[]>([]);
  const [selectedMemes, setSelectedMemes] = useState<any[]>(memes);

  const tags = ["popular", "latest", ...memes.map((meme) => meme.tags).flat()];

  // function search in array
  function searchInArray(keyword: any) {
    setSearch(keyword);
    let filtered = tags.filter((item: any) =>
      item.toLowerCase().includes(keyword)
    );
    filtered = filtered.filter((item: string, index: number) => {
      return filtered.indexOf(item) === index;
    }, []);

    setSearchedTags(filtered);
  }
  useEffect(() => {
    if (search == "") {
      setSearchedTags([]);
    }
  }, [search]);

  useEffect(() => {
    if (selectedTag == "latest") {
      const sel = memes.sort((a, b) => {
        return (
          new Date(b.created_on).getTime() - new Date(a.created_on).getTime()
        );
      });
      setSelectedMemes(sel);
    } else if (selectedTag == "popular") {
      const sel = memes.sort((a, b) => {
        return b.likes - a.likes;
      });
      setSelectedMemes(sel);
    } else {
      if (selectedTag == "latest") {
        setSelectedMemes(memes);
      } else {
        const sel = memes
          .filter((meme) => meme.tags.includes(selectedTag))
          .sort((a, b) => {
            return (
              new Date(b.created_on).getTime() -
              new Date(a.created_on).getTime()
            );
          });
        setSelectedMemes(sel);
      }
    }
  }, [selectedTag]);
  const router = useRouter();
  return (
    <div className="bg-no-repeat border-b bg-fill bg-[url('/bgs1s.png')] bg-cover bg-fixed bg-center">
      <div className="backdrop-blur-3xll bg-white/70 pb-24 ">
        <div className="desktop:container ">
          <div className="pt-20 px-4 pb-10">
            <motion.h1
              variants={textUpAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 3 }}
              className="font-poppins pb-1 text-3xl uppercase text-black text-center"
            >
              Memes i made
            </motion.h1>

            <motion.p
              variants={textUpAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 3 }}
              className="font-proxima text-slate-600 text-[18px] text-center"
            >
              Enjoy the {memes.length} memes I made over the last few months.
            </motion.p>
          </div>
          <div id="memes"></div>
          <div className="max-w-[1100px] m-auto p-2 bg-white tablet:max-w-full  top-0 z-50  ">
            <div className=" bg-white w-full flex flex-col items-center  rounded-lg border border-gray-400 py-2 ">
              <div className="flex flex-row px-4 items-center w-full">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  value={search}
                  type="search"
                  onChange={(e) => searchInArray(e.target.value)}
                  className="border-none outline-none px-4 w-full"
                  placeholder="Search by tags.."
                />
              </div>
              <div className="w-full">
                {searchedTags.length > 0 ? (
                  <div className="flex  px-4 flex-wrap mt-3 border-t pt-3">
                    {searchedTags.map((tag: string, i: number) => (
                      <div
                        onClick={() => {
                          setSearch("");
                          setselectedTag(tag);
                        }}
                        key={tag + i}
                        className="cursor-pointer select-none text-gray-500 mr-3 mb-2 px-2 py-1 text-sm bg-white border border-gray-300 rounded-md"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] m-auto p-2 pt-6 tablet:max-w-[550px] ">
            <div
              onClick={() => setselectedTag("latest")}
              className="flex flex-row items-center justify-center cursor-pointer uppercase text-sm select-none w-fit text-gray-500 mr-3 mb-6 px-2 py-1  bg-white border border-gray-300 rounded-md"
            >
              {search != "latest" && (
                <i className="fa-solid fa-xmark px-2 "></i>
              )}
              {selectedTag}
            </div>

            <p className="px-2 text-xs uppercase pb-10 text-slate-500">
              <strong>Note</strong>: here all memes are created by me and
              opinions are totally mine. If you find any meme offensive, please
              tap the <span className="underline">view on twitter</span> button
              and share your thoughts.
            </p>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {selectedMemes.map((meme: any, i: number) => (
                <Meme
                  key={meme.title}
                  meme={meme}
                  i={i}
                  onTag={(tag: string) => {
                    setSearch("");
                    router.push("#memes");
                    setselectedTag(tag);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemesComponent;
function getValuesWithDuplicates(arr: string[]) {
  const countMap = new Map();
  const duplicateValues: string[] = [];

  // Count occurrences of each element
  arr.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });

  // Check for duplicate values and add them to the result array
  countMap.forEach((count, element) => {
    if (count > 1) {
      duplicateValues.push(element);
    }
  });

  return duplicateValues;
}
