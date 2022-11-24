import Account from "@components/account";
import Footer from "@components/footer";
import Header from "@components/header";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Header />
      <div className="pt-24">
        <div className="container">
          {!session ? (
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          ) : (
            <Account session={session} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
