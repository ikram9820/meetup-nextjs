import Layout from "@/components/Layout";
import MeetupsList from "@/components/MeetupsList";
import { useContext } from "react";
import MeetupContext from "@/store/MeetupStore";

function AllMeetups() {
  const meetupsCtx = useContext(MeetupContext);
  return (
    <div>
      <Layout>
        {meetupsCtx.isLoading ? (
          <p>data is loading please wait...</p>
        ) : (
          <MeetupsList meetups={meetupsCtx.meetups} />
        )}
      </Layout>
    </div>
  );
}

export default AllMeetups;
