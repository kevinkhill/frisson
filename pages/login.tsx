import Footer from "@components/footer";
import Header from "@components/header";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Login() {
  const supabaseClient = useSupabaseClient();

  return (
    <>
      <Header />
      <Auth
        providers={["spotify"]}
        appearance={{ theme: ThemeSupa }}
        redirectTo="http://localhost:3000/"
        supabaseClient={supabaseClient}
      />
      <Footer />
    </>
  );
}
