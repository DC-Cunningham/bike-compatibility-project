import axios from "axios";

export default {
  // Gets all books
  getComponents: function () {
    return axios.get("/api/components");
  },
  // Gets the book with the given id
  getComponent: function (id) {
    return axios.get("/api/components/" + id);
  },
  // Deletes the book with the given id
  deleteComponent: function (id) {
    return axios.delete("/api/components/" + id);
  },
  // Saves a book to the database
  saveComponent: function (componentData) {
    return axios.post("/api/components", componentData);
  },
};
