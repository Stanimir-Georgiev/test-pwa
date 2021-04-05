import "../styles/globals.css";
import { register, unregister } from "next-offline/runtime";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Service worker registration
  useEffect(() => {
    const cachebuster = Math.round(new Date().getTime() / 1000);
    console.log("Registered service worker", cachebuster);
    register(`/service-worker-2.js`, { scope: "/" });
    return () => {
      unregister();
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
