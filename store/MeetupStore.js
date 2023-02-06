import { createContext, useEffect, useState } from "react";


const meetups = [
  {
    id: 1,
    imageUrl: "http://myimage.jpg",
    title: "meetup 1 title",
    address: "address 1",
    description: "this is meetup 1 description",
  },
  {
    id: 2,
    imageUrl: "http://myimage.jpg",
    title: "meetup 2 title",
    address: "address 2",
    description: "this is meetup 2 description",
  },
  {
    id: 3,
    imageUrl: "http://myimage.jpg",
    title: "meetup 3 title",
    address: "address 3",
    description: "this is meetup 3 description",
  },
  {
    id: 4,
    imageUrl: "http://myimage.jpg",
    title: "meetup 4 title",
    address: "address 4",
    description: "this is meetup 4 description",
  },
  {
    id: 5,
    imageUrl: "http://myimage.jpg",
    title: "meetup 5 title",
    address: "address 5",
    description: "this is meetup 5 description",
  },
];


const MeetupContext = createContext({
  isLoading: true,
  meetups: [],

  addMeetup: (meetup) => {},
  removeMeetup: (meetupId) => {},
});

export function MeetupContextProvider(props) {
  const [meetupList, setMeetupList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const meetupUrl =
  //   "https://meetups-react-37eb0-default-rtdb.asia-southeast1.firebasedatabase.app/meetups";

  useEffect(() => {
    setIsLoading(true);
    setMeetupList(meetups);
    setIsLoading(false);
    // fetch(meetupUrl + ".json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const meetups = [];
    //     for (let key in data) {
    //       const meetup = {
    //         id: key,
    //         ...data[key],
    //       };
    //       meetups.push(meetup);
    //     }
    //     setMeetupList(meetups);
    //     setIsLoading(false);
    //   });
  }, []);

  function addMeetupHandler(meetup) {
    setMeetupList((prev) => [...prev, meetup]);
    // fetch(meetupUrl + ".json", {
    //   method: "POST",
    //   body: JSON.stringify(meetup),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(console.log("data submited"))
    //   .catch((reason) => {
    //     console.log(reason);
    //   });
  }

  function removeMeetupHandler(meetupId) {
    setMeetupList((prev) => prev.filter((meetup) => meetup.id !== meetupId));
    // fetch(meetupUrl + `/${meetupId}.json`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     console.log("data submited");
    //   })
    //   .catch((reason) => {
    //     console.log(reason);
    //   });
  }

  const context = {
    meetups: meetupList,
    isLoading,
    addMeetup: addMeetupHandler,
    removeMeetup: removeMeetupHandler,
  };

  return (
    <MeetupContext.Provider value={context}>
      {props.children}
    </MeetupContext.Provider>
  );
}

export default MeetupContext;
