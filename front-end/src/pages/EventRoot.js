import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventNavigation";

const EventRoot = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
};

export default EventRoot;
