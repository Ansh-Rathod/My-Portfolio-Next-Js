import type { NextPage } from "next";

import Head from "next/head";
import Intro from "@/components/intro";
import About from "@/components/About";
import AllProjects from "@/components/AllProjects";

import { useContext } from "react";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import GithubCard from "@/components/GithubCard";
import redis from "lib/redis";
import MusiveCard from "@/components/MusiveCard";
import { useRouter } from "next/router";
import { projects } from "../data/projects";
import Model from "../components/Model";

const Home: NextPage = ({ data }: any) => {
  const router = useRouter();

  return (
    <div className="font-apple">
      <Head>
        <meta property="og:title" content="Ansh Rathod | Portfolio" />
        <meta property="og:site_name" content="Ansh Rathod | Portfolio" />
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
        <meta name="twitter:site" content="@AnshhRathod" />
        <meta name="twitter:creator" content="@AnshhRathod" />
        <meta name="twitter:title" content="Ansh Rathod | Portfolio" />
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
        <div className="border-t-[1px] border-t-slate-300"></div>
        <div className=" pt-24 max-w-[1200px] mx-auto flex flex-col items-center px-2">
          <GithubCard data={data} />
        </div>

        <Skills />
        <div className="border-t-[1px] border-t-slate-300"></div>

        <div className="py-24 max-w-[1200px] mx-auto flex flex-col items-center px-4">
          <MusiveCard />
        </div>

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
          followers: 114,
          stars: 361,
        },
      },
    };
  }
}

export default Home;
