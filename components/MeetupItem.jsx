import { useContext } from "react";
import MeetupContext from "../store/MeetupStore";
import FavoriteContext from "../store/FavoriteStore";

function MeetupItem({ meetup }) {
  const meetupsCtx = useContext(MeetupContext);
  const favoriteMeetupCtx = useContext(FavoriteContext);

  function handleAddFavorite() {
    
    favoriteMeetupCtx.isFavoriteMeetup(meetup.id)
      ? favoriteMeetupCtx.removeFavoriteMeetup(meetup.id)
      : favoriteMeetupCtx.addFavoriteMeetup(meetup);
  }

  return (
    <div className="card my-2">
      <img src={meetup.imageUrl} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{meetup.title}</h5>
        <p className="card-text">{meetup.description}</p>
        <button onClick={handleAddFavorite} className="btn btn-primary">
          
          { !favoriteMeetupCtx.isFavoriteMeetup(meetup.id)
      ? "Add to favorite"
      : "Remove from favorite"}
        </button>
        <button
          onClick={() => meetupsCtx.removeMeetup(meetup.id)}
          className="btn btn-outline-danger mx-3"
        >
          Delete Meetup
        </button>
      </div>
    </div>
  );
}

export default MeetupItem;
