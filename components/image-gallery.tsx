import { Masonry } from "react-plock";

const MyGallery = () => {
  let numbers: string[] = [
    "/pins/wall41.jpg",
    "/pins/wall21.jpg",
    "/pins/wall11.jpg",
    "/pins/wall40.jpg",
    "/pins/wall24.jpg",
    "/pins/wall2.jpg",
    "/pins/wall12.jpg",
    "/pins/wall52.jpg",
    "/pins/wall10.jpg",
    "/pins/wall9.jpg",
    "/pins/wall16.jpg",
    "/pins/wall25.jpg",
    "/pins/wall42.jpg",
    "/pins/wall57.jpg",
    "/pins/wall54.jpg",
    "/pins/wall6.jpg",
    "/pins/wall34.jpg",
    "/pins/wall43.jpg",
    "/pins/wall38.jpg",
    "/pins/wall45.jpg",
    "/pins/wall1.jpg",
    "/pins/wall32.jpg",
    "/pins/wall37.jpg",
    "/pins/wall56.jpg",
    "/pins/wall4.jpg",
    "/pins/wall33.jpg",
    "/pins/wall50.jpg",
    "/pins/wall49.jpg",
    "/pins/wall17.jpg",
    "/pins/wall20.jpg",
    "/pins/wall30.jpg",
    "/pins/wall23.jpg",
    "/pins/wall48.jpg",
    "/pins/wall14.jpg",
    "/pins/wall28.jpg",
    "/pins/wall44.jpg",
    "/pins/wall8.jpg",
    "/pins/wall29.jpg",
    "/pins/wall7.jpg",
    "/pins/wall35.jpg",
    "/pins/wall36.jpg",
    "/pins/wall46.jpg",
    "/pins/wall19.jpg",
    "/pins/wall53.jpg",
    "/pins/wall3.jpg",
    "/pins/wall13.jpg",
    "/pins/wall22.jpg",
    "/pins/wall31.jpg",
    "/pins/wall69.jpg",
    "/pins/wall15.jpg",
    "/pins/wall51.jpg",
    "/pins/wall5.jpg",
  ];

  return (
    <div>
      <div className=" flex flex-col justify-center max-w-[600px] mx-auto tablet:block mobile:block mobile:px-3 px-4">
        <div className=" px-6 my-20">
          <h1 className="uppercase font-poppins text-3xl font-bold ">
            Random Pins
          </h1>
          <p className="text-gray-500 mt-2">
            The random images he saved last year in boredom also some while
            building this website. Most images are from the movies, tvshows and
            sport. this nerd watches sport MMA lol from begining of 2024.
          </p>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="px-2 max-w-[1000px] mx-auto">
        <Masonry
          items={numbers}
          config={{
            columns: [2, 3, 3],
            gap: [6, 6, 6],
            media: [640, 768, 1024],
          }}
          render={(item, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={item}
              style={{ width: "100%", height: "auto" }}
              alt=""
              className="rounded-lg"
            />
          )}
        />
      </div>
    </div>
  );
};

export default MyGallery;
