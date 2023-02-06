import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { MeetupContextProvider } from "@/store/MeetupStore";
import { FavoriteContextProvoider } from "@/store/FavoriteStore";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <MeetupContextProvider>
      <FavoriteContextProvoider>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </FavoriteContextProvoider>
    </MeetupContextProvider>
  );
}
