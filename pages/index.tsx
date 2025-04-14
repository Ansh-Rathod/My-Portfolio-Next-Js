import type { NextPage } from "next";

import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import ChessStats from "@/components/chess";
import Contact from "@/components/Contact";
import Intro from "@/components/intro";
import MemesIntro from "@/components/memes";
import Skills from "@/components/Skills";
import UsefulProducts from "@/components/useful-products";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Model from "../components/Model";
import { allHisProjects } from "../data/projects";

const Home: NextPage = ({ data }: any) => {
  const router = useRouter();

  return (
    <div className="font-apple tracking-tighter lowercase">
      <Head>
        <meta property="og:title" content="Ansh Rathod" />
        <meta property="og:site_name" content="Ansh Rathod" />
        <meta property="og:url" content="https://anshrathodfr.vercel.app" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathodfr.vercel.app/intro_image_meta.png"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anshrathodfr" />
        <meta name="twitter:creator" content="@anshrathodfr" />
        <meta name="twitter:title" content="Ansh Rathod" />
        <meta
          name="twitter:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathodfr.vercel.app/intro_image_meta.png"
        />
        <title>Ansh Rathod</title>
      </Head>

      <div className="tracking-tighter">
        <Intro />

        <About />
        {/* <div className=" border-t-[0.6px] border-t-slate-200"></div> */}
        {/* <div
          className=" pt-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-2"
        >
          <GithubCard data={data} />
        </div> */}
        {/* <div className="border-t-[1px] border-t-slate-300 "></div> */}
        {/* <Views posts={posts} /> */}
        {/* <div
          className="py-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-4"
        >
          <MusiveCard />
        </div> */}
        {/* <div className="border-t-[1px] border-t-slate-300 mt-14"></div> */}
        <UsefulProducts />
        <AllProjects />
        <Skills />
        <div className="max-w-[600px] mx-auto">
          <div className="mt-10 font-proxima text-[17px] max-w-[600px] px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Ansh-Rathod"
              alt="GitHub Stats"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className=" font-proxima text-[17px] max-w-[600px] px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Ansh-Rathod"
              alt="GitHub Streak"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className=" font-proxima text-[17px] max-w-[600px] px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
            <img
              src="http://ghchart.rshah.org/Ansh-Rathod"
              alt="GitHub Streak"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h2 className="px-6 font-poppins text-[24px] mt-10">
            time spent in the text editor:
          </h2>
          <p className="px-6 mb-4"> From 2 jan, 2024 to today</p>

          <div className=" font-proxima text-[17px] max-w-[600px] px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full text-gray-500 mx-auto">
            <img
              src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D23597%26project%3D%26in%3D0"
              alt="CodeTime Shield"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <ChessStats />
        <MemesIntro />
        {/* <WhyIBuiltThisWebsite /> */}
        <Contact />
        <h2 className="px-6 font-poppins text-[24px] mt-10 max-w-[600px] mx-auto">
          and
        </h2>
        <div className=" max-w-[600px] mx-auto rounded-lg px-4 mb-10 ">
          <Image
            src="/pins/wall15.jpg"
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            objectFit="cover"
            className="rounded-lg "
          />
        </div>
        {/* <MyGallery /> */}
        <Model
          isOpen={!!router.query.slug}
          project={allHisProjects.find(
            (project: any) => project.name.toLowerCase() == router.query.slug
          )}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // const files = fs.readdirSync(path.join("public", "views"));

  // const posts = files.map((file) => {
  //   const slug = slugify(file.replace(".md", ""));
  //   const markdownMetaData = fs.readFileSync(
  //     path.join("public", "views", file),
  //     "utf-8"
  //   );

  //   const { data: frontmatter, content } = matter(markdownMetaData);
  //   return {
  //     slug,
  //     frontmatter,
  //     content,
  //   };
  // });
  // console.log(posts);

  return {
    props: {
      data: {
        username: "Ansh-Rathod",
        avatar: "https://avatars.githubusercontent.com/u/67627096?v=4",
        repos: 32,
        followers: 303,
        stars: 689,
      },
      // posts: posts,
    },
  };
}

export default Home;
