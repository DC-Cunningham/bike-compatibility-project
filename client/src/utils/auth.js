import API from "./API.js";

const localStorageAuthKey = "User";
export function saveAuthorisation(user, token) {
  console.log(user);
  console.log(token);
  const userDetails = {
    displayName: user.displayName,
    email: user.email,
    isAuthorised: true,
  };
  if (typeof Storage !== "undefined") {
    try {
      user.isAuthorised = true;
      localStorage.setItem("User_Token", token);
      localStorage.setItem(localStorageAuthKey, JSON.stringify(userDetails));
    } catch (ex) {
      console.log(ex);
    }
  } else {
    // No web storage Support.
  }
}

export function logout() {
  if (typeof Storage !== "undefined") {
    try {
      const auth = JSON.parse(localStorage.getItem(localStorageAuthKey));
      auth.isAuthorised = false;
      auth.Name = "";
      localStorage.setItem(localStorageAuthKey, JSON.stringify(auth));
    } catch (ex) {
      console.log(ex);
    }
  } else {
    // No web storage Support.
  }
}

export function getAuth() {
  try {
    if (typeof Storage !== "undefined") {
      const auth = JSON.parse(localStorage.getItem(localStorageAuthKey));
      if (auth === null) {
        auth = {};
        auth.isAuthorised = false;
      }
      return auth;
    } else {
      return false;
    }
  } catch (ex) {
    return false;
  }
}

export function isAuthorised() {
  try {
    if (typeof Storage !== "undefined") {
      const auth = JSON.parse(localStorage.getItem(localStorageAuthKey));
      return auth.isAuthorised || false;
    } else {
      return false;
    }
  } catch (ex) {
    return false;
  }
}
