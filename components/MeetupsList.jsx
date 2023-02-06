import MeetupItem from "./MeetupItem";

function MeetupsList(props){
    console.log(props.meetups);
    return (
        props.meetups.map((meetup)=> <MeetupItem key={meetup.id} meetup = {meetup} />)
    );
}

export default MeetupsList;