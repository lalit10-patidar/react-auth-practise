import { json, useLoaderData } from "react-router-dom";
import EventList from "../components/EventList";

const Events = () => {
  const { events } = useLoaderData();
  return <EventList events={events} />;
};

export default Events;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};
