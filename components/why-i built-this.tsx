function WhyIBuiltThisWebsite() {
  return (
    <div>
      <div className=" flex flex-col justify-center max-w-[600px] mx-auto tablet:block mobile:block mobile:px-3">
        <div className=" px-6 ">
          <h1 className="uppercase font-poppins text-3xl font-bold ">
            Why He built this webstie?
          </h1>
          <p className="text-gray-500 mt-2">
            he states &quot;as a fan of elon musk&apos;s work&quot; the video
            below gives him bigger perspective of life.
          </p>
        </div>
        <div className="px-6">
          <video controlsList="play" controls loop className="rounded-lg mt-4">
            <source
              src={"videos/elon-musk-about-problem-solving.mp4"}
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500">
          <p>
            &quot;We have to be excited about the future, We have to do things
            that make us want to live, Life can&apos;t just be about solving
            problems.&quot;
          </p>
          <br />
          <p>-Elon Musk</p>
          <br />
          <p>He wrote little message:</p>
          <div className="bg-gray-100 p-2 rounded-lg mt-2">
            <p>
              I built this website for fun, some people said &quot;why work hard
              on building this kinda useless website?&quot; the elon musk video
              above answers this ig.
            </p>
            <br />
            <p>
              people build portfolio websites showcasing skills and projects to
              get a job or something i dont care about that i have added more of
              personality in this site, for reminder to my future self about the
              things i love at this time and not to lost it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyIBuiltThisWebsite;
