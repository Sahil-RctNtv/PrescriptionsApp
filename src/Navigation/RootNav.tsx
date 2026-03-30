import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { supabase } from "../SupaBase/SupaBase";
import AuthNav from "./AuthNav";
import AppNav from "./AppNav";
// import PreLoader from "../components/PreLoader";


const RootNav = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <NavigationContainer>
      {session ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
export default RootNav;


