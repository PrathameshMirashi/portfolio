import { inputValidation } from "../utils/formHandler";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const handleSubmit = ({ e, userData, setError, setUserData }) => {
  e.preventDefault();
  const { isValid, newError } = inputValidation(userData);
  setError(newError);
  if (isValid) {
    const templateParams = {
      name: userData.fname,
      email: userData.email,
      subject: userData.subject,
      message: userData.msg,
    };
    emailjs
      .send(
        "service_j9zs9vh",
        "template_2q9s72a",
        templateParams,
        "Ydo4rlMff59Pa9EeM"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          setUserData({ fname: "", email: "", subject: "", msg: "" });
          setError({ fname: "", email: "", subject: "", msg: "" });
        },
        () => {
          toast.error("❌ Failed to send message. Try again.");
        }
      );
    setUserData({ fname: "", email: "", subject: "", msg: "" });
    setError({ fname: "", email: "", subject: "", msg: "" });
  }
};
