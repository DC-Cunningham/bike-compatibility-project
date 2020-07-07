import axios from "axios";

export default {
  // Gets all components
  getComponents: function (search) {
    return axios.get(`/api/components${search ? "?" + search : ""}`);
  },
  // Gets the component with the given id
  getComponent: function (id) {
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
};
