import { useState } from "react";

import Image from "next/image";

interface SliderProps {
  images: Array<String>;
}

const Slider = (props: SliderProps) => {
  const [i, setIndex] = useState(0);
  const { images } = props;
  return (
    <div className=" flex flex-row items-center ">
      <div
        className={`p-3 cursor-pointer hover:bg-gray-100 rounded-full 
        ${i == 0 && `invisible`}`}
        onClick={() => setIndex(i - 1)}
      >
        <i className="fa-sharp fa-solid fa-chevron-left"></i>
      </div>
      <div className="h-[500px] ">
        <Image
          src={`/imgs/` + images[i]}
          alt="image"
          objectFit="contain"
          width={250}
          height={500}
          placeholder="blur"
          blurDataURL="/Cineast-1.PNG"
        />
      </div>

      <div
        className={`p-3 cursor-pointer hover:bg-gray-100 rounded-full 
        ${i + 1 == images.length && `invisible`}`}
        onClick={() => setIndex(i + 1)}
      >
        <i className="fa-sharp fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Slider;
