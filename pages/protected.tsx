import Footer from "@components/footer";
import Header from "@components/header";
import PreFooter from "@components/homepage/pre-footer";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { GetServerSidePropsContext } from "next";

export default function Home({ user }: { user: User }) {
  return (
    <>
      <Header />
      <div>Protected content for {user.email}</div>
      <p>Data fetched with provider token:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <PreFooter />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client

  const supabase = createServerSupabaseClient(ctx);

  // Check if we have a session

  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",

        permanent: false
      }
    };

  // Retrieve provider_token & logged in user's third-party id from metadata

  const { provider_token, user } = session;

  // const userId = user.user_metadata.user_name;

  // const allRepos = await (
  //   await fetch(`https://api.github.com/search/repositories?q=user:${userId}`, {
  //     method: "GET",

  //     headers: {
  //       Authorization: `token ${provider_token}`
  //     }
  //   })
  // ).json();
  console.log(provider_token);
  return { props: { user } };
  // return { props: { user, allRepos } };
};
