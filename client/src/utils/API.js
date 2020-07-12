import axios from "axios";
import { getAuth, saveAuthorisation } from "./auth";

export default {
  // Gets all components
  getComponents: function (search) {
    return axios.get(`/api/components${search ? "?" + search : ""}`);
  },
  // Gets the component with the given id
  getComponent: function (id) {
    console.log(id);
    return axios.get("/api/components/" + id);
  },
  // Deletes the component with the given id
  deleteComponent: function (id) {
    return axios.delete("/api/components/" + id);
  },
  // Saves a component to the database
  saveComponent: function (componentData) {
    return axios.post("/api/components", componentData);
  },
  updateComponent: function (componentData) {
    console.log(componentData);
    return axios.put("/api/components", componentData);
  },
  loginAPI: async function (data) {
    const response = await axios.post("/api/login", data);
    saveAuthorisation(response.data.data.user, response.data.data.token);
    return response;
  },
  registerAPI: function (data) {
    return axios.post("/api/register", data);
  },
  getUser: function () {
    return axios.get("/api/me", {
      headers: {
        authorization: "Bearer " + getAuth(),
      },
    });
  },
  getUserBasedOnToken: function (token) {
    return axios.get("/api/user", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  },
};
