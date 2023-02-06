import { useContext } from "react";
import FavoriteContext from "../store/FavoriteStore";
import MeetupsList from "../components/MeetupsList";
import Layout from "../components/Layout";

function Favorite() {
  const favoriteMeetupCtx = useContext(FavoriteContext);

  return (
    <Layout>
      {favoriteMeetupCtx.isLoding ? (
        <p>favorite meetups are loading please wait...</p>
      ) : (
        <MeetupsList meetups={favoriteMeetupCtx.favoriteMeetups} />
      )}
    </Layout>
  );
}

export default Favorite;
