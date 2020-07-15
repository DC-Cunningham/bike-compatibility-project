import API from "./API.js";
import jwt from "jsonwebtoken";

export function saveAuthorisation(token) {
  if (typeof Storage !== "undefined") {
    try {
      localStorage.setItem("User_Token", token);
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
      localStorage.removeItem("User_Token");
    } catch (ex) {
      console.log(ex);
    }
  } else {
    // No web storage Support.
  }
}

// export function isAuthorised() {
//   try {
//     if (typeof Storage !== "undefined") {
//       const token = JSON.parse(localStorage.getItem("User_Token"));
//       console.log(token);
//       return token || false;
//     } else {
//       return false;
//     }
//   } catch (ex) {
//     return false;
//   }
// }

export function isAuthorised() {
  if (!localStorage) {
    throw new Error("Local Storage Unavailable");
  }
  const rawToken = localStorage.getItem("User_Token") || "";
  const token = jwt.decode(rawToken);
  if (!token || typeof token !== "object" || Date.now() > token["exp"] * 1000) {
    localStorage.removeItem("User_Token");
    return "";
  }
  return rawToken;
}
