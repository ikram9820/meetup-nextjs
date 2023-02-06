import { useRef, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import MeetupContext from "@/store/MeetupStore";

function AddMeetup() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addresInputRef = useRef();
  const descInputRef = useRef();
  const router = useRouter();
  const meetupCtx = useContext(MeetupContext);

  function formSubmitHandler(event) {
    event.preventDefault();
    const meetup = {
      title: titleInputRef.current.value,
      imageUrl: imageInputRef.current.value,
      address: addresInputRef.current.value,
      description: descInputRef.current.value,
    };

    meetupCtx.addMeetup(meetup);
    
    router.replace('/meetups');

  }

  return (
    <Layout>
      <form>
        <input
          type="text"
          placeholder="Meetup Title"
          className="form-control my-3"
          ref={titleInputRef}
        />
        <input
          type="url"
          placeholder="Meetup Image Url"
          className="form-control my-3"
          ref={imageInputRef}
        />
        <input
          type="address"
          placeholder="Meetup Address"
          className="form-control my-3"
          ref={addresInputRef}
        />
        <textarea
          placeholder="Description"
          className="form-control my-3"
          ref={descInputRef}
        />

        <button
          onClick={formSubmitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default AddMeetup;
