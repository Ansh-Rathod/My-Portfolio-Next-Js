import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div>
      <Head>
        <title>We&apos;re forking React native. This is why.</title>
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anshrathodfr" />
        <meta name="twitter:creator" content="@anshrathodfr" />
        <meta
          name="twitter:title"
          content="I'm switching to react native. This is why"
        />
        <meta
          property="og:title"
          content="I'm switching to react native. This is why"
        />
        <meta
          property="og:site_name"
          content="I'm switching to react native. This is why"
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathodfr.vercel.app/clickbait.png"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathodfr.vercel.app/clickbait.png"
        />
      </Head>
      <div className="min-h-screen bg-zinc-900 text-zinc-100 p-4 md:p-8">
        <div className="h-60"></div>
        <article className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            After 4 years of building in flutter I&apos;m switching to react
            native. This is why.
          </h1>

          <div className="flex items-center gap-3">
            <div className="rounded-full w-10 h-10">
              <Image
                src={"/z_QA0GlL_400x400.jpg"}
                width={100}
                className="rounded-full"
                height={100}
                alt="Ansh Rathod"
              />
            </div>
            <div className="flex items-center gap-2 text-lg text-zinc-300">
              <span>Ansh Rathod</span>
              <span>•</span>
              <time dateTime="2024-10-27">October 30, 2024</time>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-200">
            <p>
              Over the years, There are many debates or Beginners questioning on
              whether React Native is best or flutter? I am here to answer none
              of your questions. it was clickbait to get you here, Go touch
              grass you computer nerd, cut down the internet for a day and eat
              ice creem it&apos;s better than posting memes on twitter thats
              what my mom said. and about the switching framework i just use
              flutter why would i spend more time learning new framework, jsx
              syntex are bad and has horrible dev exprience with typescript type
              errors eww, if google kills flutter one day i dont care! we all
              will laugh and will make more memes to share on twitter and we all
              can go back to writing html css. in the end, having fun is all
              that matters.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              React Native&apos;s is the best (maybe)
            </h2>

            <p>
              if you wanna build a app choose react native, if you wanna have
              fun cho0se flutter, if you wanna make money lets share memes on
              twitter, i chose twitter that why im writing and yeah i built
              desktop app using flutter(i dont care about tech stack you
              shouldnt too) called{" "}
              <Link href={"https://pimosa.app"} className="text-blue-500">
                <span className="text-blue-400 cursor-pointer">
                  Pimosa it&apos;s all in one media tool kit buy now it is
                  useful tool
                </span>
              </Link>{" "}
              if flutter dies i dont care I&apos;m learning game dev, building
              UI is boring now after doing it for the 4 years.
            </p>
            <p>
              My belief is that make money by giving value to users and have
              fun, generally i like building so i dont care about the tech
              stack, i just want to build something that will be useful to
              users. dont get attached to these frameworks its just zeros and
              onezies, 2030 nope i wont be using it, or will i? maybe not maybe
            </p>

            <p>
              Rick Astley - Never Gonna Give You Up (Video) by Rick Astley link
              input here.
            </p>
          </div>
        </article>
        <div className="h-60"></div>
      </div>
    </div>
  );
}
