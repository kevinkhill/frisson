import Account from "@components/account";
import Footer from "@components/footer";
import Header from "@components/header";
import HomepageWelcomeSection from "@components/homepage/homepage-welcome";
import PreFooter from "@components/homepage/pre-footer";
import SpotifyButton from "@components/homepage/spotify-button";
import { BottomSwoosh, TopSwoosh } from "@components/homepage/swooshes";
import WelcomeCards from "@components/homepage/welcome-cards";
import MyParticles from "@components/particles";
import frissonParticles from "@lib/frisson-particles";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import clsx from "clsx";
import { useState } from "react";

export const SITE_TITLE = "Frisson";

export default function Home() {
  const session = useSession();
  // const [options, setOptions] = useState();
  // const options = mergeOptions({});
  // const supabase = useSupabaseClient();

  return (
    <>
      <Header />
      <div className="pt-24 bg-transparent">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Do you love when music gives you goosebumps?
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">Thats Frisson!</h1>
            <p className="leading-normal text-2xl mb-8">
              We want to connect people and help spread frisson to everyone around the world.
            </p>
            <SpotifyButton />
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            {/* <img className="w-full md:w-4/5 z-50" src="https://place-hold.it/300x300?text=Noice!" /> */}
            <MyParticles options={frissonParticles} />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <TopSwoosh fillColor="#FFFFFF" />
      </div>

      <section
        className={clsx("bg-white border-b py-8", { hidden: typeof session !== "undefined" })}
      >
        <div className="container">{session && <Account session={session} />}</div>
      </section>

      <section className="bg-white border-b py-8">
        <HomepageWelcomeSection />
      </section>

      <section className="bg-white py-8">
        <WelcomeCards />
      </section>

      {/* <!-- Change `previousSectionColor` to match above section #f8fafc --> */}
      <BottomSwoosh fillColor="#FFFFFF" previousSectionColor="#ffffff" />
      <PreFooter />
      <Footer />
    </>
  );
}
