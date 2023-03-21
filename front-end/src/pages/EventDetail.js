import { json, useLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import { getAuthToken } from "../utils/auth";

const EventDetail = () => {
  const { event } = useLoaderData();
  return <EventItem event={event} />;
};

export default EventDetail;

export const eventLoader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event!" }, { status: 500 });
  }

  return await response.json();
};

export const eventAction = async ({ request, params }) => {
  const id = params.eventId;
  const method = request.method;
  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event!" }, { status: 500 });
  }

  return redirect("/events");
};
