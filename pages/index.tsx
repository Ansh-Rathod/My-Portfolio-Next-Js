import type { NextPage } from "next";

import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import Intro from "@/components/intro";
import Head from "next/head";

import Contact from "@/components/Contact";
import GithubCard from "@/components/GithubCard";
import MusiveCard from "@/components/MusiveCard";
import Skills from "@/components/Skills";
import { useRouter } from "next/router";
import Model from "../components/Model";
import { projects } from "../data/projects";

const Home: NextPage = ({ data }: any) => {
  const router = useRouter();

  return (
    <div className="font-apple">
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

      <div>
        <Intro />
        <About />
        {/* <div className=" border-t-[0.6px] border-t-slate-200"></div> */}
        {/* <div
          className=" pt-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-2"
        >
          <GithubCard data={data} />
        </div> */}

        <Skills />
        {/* <div className="border-t-[1px] border-t-slate-300 "></div> */}
        {/* <Views posts={posts} /> */}
        {/* <div
          className="py-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-4"
        >
          <MusiveCard />
        </div> */}
        {/* <div className="border-t-[1px] border-t-slate-300 mt-14"></div> */}

        <AllProjects />

        <Contact />
        <Model
          isOpen={!!router.query.slug}
          project={projects.find(
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
