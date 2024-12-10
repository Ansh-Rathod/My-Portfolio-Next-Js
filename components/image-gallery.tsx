import { Masonry } from "react-plock";

const MyGallery = () => {
  let numbers: string[] = [];
  for (let i = 1; i < 42; i++) {
    numbers.push(`/pins/wall${i}.jpg`);
  }
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  numbers = shuffleArray(numbers);

  return (
    <div>
      <div className=" flex flex-col justify-center max-w-[600px] mx-auto tablet:block mobile:block mobile:px-3">
        <div className=" px-6 my-10">
          <h1 className="uppercase font-poppins text-3xl font-bold ">
            Random Pins from Wall
          </h1>
          <p className="text-gray-500 mt-2">
            why would someone add this section to the website? it makes no
            sense, see he just built this website for fun.
          </p>
        </div>
      </div>
      <Masonry
        items={numbers}
        config={{
          columns: [1, 2, 3],
          gap: [0],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={item}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        )}
      />
    </div>
  );
};

export default MyGallery;
