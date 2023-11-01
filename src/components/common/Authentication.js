export const Validation = (data) => {
  const Erorrs = {};

  if (!data.firstname.trim()) {
    Erorrs.firstname = "FirstName is Requierd";
  } else {
    delete Erorrs.firstname;
  }

  if (!data.lastname.trim()) {
    Erorrs.lastname = "Lastname is Requierd";
  } else {
    delete Erorrs.lastname;
  }

  if (!data.email) {
    Erorrs.email = "Email is Requierd";
  } else if (
    !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)
  ) {
    Erorrs.email = "Email is Invalid";
  } else {
    delete Erorrs.email;
  }

  if (!data.password) {
    Erorrs.password = "Password is Requierd";
  } else if (data.password.length < 6) {
    Erorrs.password = "Password Lenght Should Be upper than 6";
  } else {
    delete Erorrs.password;
  }

  return Erorrs;
};

export const ContactValidation = (data) => {
  const Errors = {};
  // FullName
  if (!data.fullname) {
    Errors.fullname = true;
  } else {
    delete Errors.fullname;
  }
  // Email
  if (!data.email) {
    Errors.email = true;
  } else if (
    !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)
  ) {
    Errors.email = true;
  } else {
    delete Errors.email;
  }
  // Message
  if (!data.message) {
    Errors.message = true;
  } else {
    delete Errors.message;
  }

  return Errors;
};
