import NewsLetterSignup from "../components/NewsLettersSignup";
import PageContent from "../components/PageContent";

const NewsLetter = () => {
  return (
    <PageContent title="Join our newsletter!">
      <NewsLetterSignup />
    </PageContent>
  );
};

export default NewsLetter;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
