import type { NextPage } from "next";

import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import Intro from "@/components/intro";
import Head from "next/head";

import Contact from "@/components/Contact";
import GithubCard from "@/components/GithubCard";
import MusiveCard from "@/components/MusiveCard";
import Skills from "@/components/Skills";
import redis from "lib/redis";
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
        <meta property="og:url" content="https://www.anshrathod.com" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
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
          content="https://anshrathod.com/intro_image_meta.png"
        />
        <title>Ansh Rathod | Portfolio</title>
      </Head>

      <div>
        <Intro />
        <About />
        <div className=" border-t-[0.6px] border-t-slate-200"></div>
        <div
          className=" pt-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-2"
        >
          <GithubCard data={data} />
        </div>
        <div className=" border-t-[0.6px] border-t-slate-200 mt-14"></div>

        <Skills />
        <div className="border-t-[1px] border-t-slate-300 "></div>

        <div
          className="py-14 max-w-[1200px] mx-auto flex flex-col
         items-center px-4"
        >
          <MusiveCard />
        </div>
        <div className="border-t-[1px] border-t-slate-300 mt-14"></div>

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
  try {
    if (redis.status == "end") {
      await redis.connect();
    }
    const cache = await redis.get("Ansh-Rathod");
    if (cache == null) {
      const res = await fetch(`https://api.github.com/users/Ansh-Rathod`);
      const repos = await fetch(
        `https://api.github.com/users/Ansh-Rathod/repos`
      );
      const repoData = await repos.json();
      const data = await res.json();
      var totalStars = 0;
      repoData.forEach((repo: any) => {
        totalStars += repo.stargazers_count;
      });
      const cache = {
        username: data.login,
        avatar: data.avatar_url,
        repos: data.public_repos,
        followers: data.followers,
        stars: totalStars,
      };
      await redis.setex("Ansh-Rathod", 86400, JSON.stringify(cache));
      redis.disconnect();
      return {
        props: {
          data: cache,
        },
      };
    } else {
      redis.disconnect();
      return {
        props: {
          data: JSON.parse(cache),
        },
      };
    }
  } catch (error) {
    return {
      props: {
        data: {
          username: "Ansh-Rathod",
          avatar: "https://avatars.githubusercontent.com/u/67627096?v=4",
          repos: 28,
          followers: 122,
          stars: 370,
        },
      },
    };
  }
}

export default Home;
