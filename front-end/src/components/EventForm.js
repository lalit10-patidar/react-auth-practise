import {
  Form,
  useNavigate,
} from "react-router-dom";
import classes from "./EventForm.module.css";

const EventForm = ({ method, event }) => {
//   const data = useActionData();
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label>Title</label>
        <input type="text" id="title" name="title" required defaultValue={event?.title}/>
      </p>
      <p>
        <label>Image</label>
        <input type="url" id="image" name="image" required defaultValue={event?.image}/>
      </p>
      <p>
        <label>Date</label>
        <input type="date" id="date" name="date" required defaultValue={event?.date}/>
      </p>
      <p>
        <label>Description</label>
        <textarea name="description" id="description" rows="5"  required defaultValue={event?.description}/>
      </p>
      <div className={classes.action}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
};

export default EventForm;

// export const action = async ({ request, params }) => {
//   const data = await request.formData();

//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "Post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "Could not save event." }, { status: 500 });
//   }

//   return redirect("/events");
// };
