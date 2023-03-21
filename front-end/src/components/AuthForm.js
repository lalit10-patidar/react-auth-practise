import { Form, Link, useSearchParams } from "react-router-dom";
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [seachParam] = useSearchParams();
  const isLogin = seachParam.get("mode") === "login";

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
      <p>
        <label>Email</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label>Password</label>
        <input type="password" id="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? "Create new user" : "Login"}
        </Link>
        <button>Save</button>
      </div>
    </Form>
  );
};

export default AuthForm;
