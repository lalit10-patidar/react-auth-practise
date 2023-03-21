import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
import { getAuthToken } from "../utils/auth";

const NewEvent = () => {
  return <EventForm method="POST" />;
};

export default NewEvent;

export const action = async ({ request, params }) => {
  const method = request.method;

  const data = await request.formData();
  const token = getAuthToken();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";
  if (params?.eventId) {
    url = url + "/" + params.eventId;
  }
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json(
      { message: "Could not save event!" },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};
