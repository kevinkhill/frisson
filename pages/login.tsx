import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import Account from "../components/account";
import Footer from "../components/footer";
import Header from "../components/header";
import SpotifyButton from "../components/homepage/spotify-button";
import Swooshes from "../components/swooshes";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Header />
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just right!
            </p>
            {SpotifyButton()}
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <Swooshes />
      </div>
      <section className="bg-white border-b py-8">
        <div className="container">
          {!session ? (
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          ) : (
            <Account session={session} />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
