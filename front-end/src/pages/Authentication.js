import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Authentication = () => {
  return <AuthForm />;
};

export default Authentication;

export const action = async ({ request, params }) => {
  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get("mode");
  
  if (mode !== "signup" && mode !== "login") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  

  let response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (!response.ok) {
    throw json({ message: "Could not authenticate a user" }, { status: 500 });
  }

  response = await response.json();
  localStorage.setItem("token", response.token);

  let now = new Date();
  now.setHours(now.getHours() + 1);

  localStorage.setItem("expiration", now.toISOString());

  return redirect("/");
};
