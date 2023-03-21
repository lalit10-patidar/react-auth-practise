import NewsLetterSignup from "./NewsLettersSignup";
import classes from "./MainNavigation.module.css";
import { NavLink, useRouteLoaderData, Form } from "react-router-dom";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/newsletter">News letters</NavLink>
          </li>
          {!token && (
            <li>
              <NavLink to="/auth?mode=login">Authentication</NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsLetterSignup />
    </header>
  );
};

export default MainNavigation;
