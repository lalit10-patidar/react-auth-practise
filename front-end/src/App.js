import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import { tokenLoader } from "./utils/auth";
import HomePage from "./pages/Home";
import EventsRootLayout from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
import Events, { eventsLoader } from "./pages/Events";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import Authentication, { action as authAction } from "./pages/Authentication";
import { action as logoutAction } from "./pages/logout";
import NewsLetter, { action as NewsLetterAction } from "./pages/NewsLetter";
import EventDetail, { eventLoader, eventAction } from "./pages/EventDetail";
import EventEdit from "./pages/EventEdit";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: "/events/new",
            element: <NewEvent />,
            action: newEventAction,
          },
          {
            path: "/events/:eventId",
            element: <EventDetail />,
            loader: eventLoader,
            action: eventAction
          },
          {
            path: "/events/:eventId/edit",
            element: <EventEdit />,
            loader: eventLoader,
            action: newEventAction,
          },
        ],
      },
      {
        path: "/auth",
        element: <Authentication />,
        action: authAction,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
        action: NewsLetterAction,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
