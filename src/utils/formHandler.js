export const inputHandle = ({ e, setUserData, setError }) => {
  const { name, value } = e.target;
  let sanitizedValue = value;

  if (name === "fname" || name === "subject") {
    sanitizedValue = value.trimStart().replace(/[^a-zA-Z ]/g, "");
  }
  if (name === "email" || name === "msg") {
    sanitizedValue = value.replace(/\s/g, "");
  }

  if (name === "msg") {
    sanitizedValue = value.trimStart().replace(/[^a-zA-Z0-9 ]/g, "");
  }

  setUserData((prev) => ({
    ...prev,
    [name]: sanitizedValue,
  }));
  setError((prev) => ({
    ...prev,
    [name]: "",
  }));
};

export const inputValidation = (userData) => {
  let isValid = true;
  let newError = { fname: "", email: "", subject: "", msg: "" };
  if (!userData.fname) {
    newError.fname = "Enter your name";
    isValid = false;
  }
  if (!userData.subject) {
    newError.subject = "Add your subject";
  }
  if (!userData.email) {
    newError.email = "Enter your email";
  } else {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userData.email)) {
      newError.email = "Please enter valid email";
      isValid = false;
    }
  }
  if (!userData.msg) {
    newError.msg = "Add your message";
  }
  return { isValid, newError };
};
