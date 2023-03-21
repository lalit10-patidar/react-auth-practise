import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EventEdit = () => {
  const { event } = useLoaderData();
  return <EventForm method="PATCH" event={event} />;
};

export default EventEdit;
