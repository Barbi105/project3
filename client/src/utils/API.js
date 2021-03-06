import axios from "axios";

export default {

  /*
    USERS
  */
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUserById: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Gets the user with the given id
  updateUser: function (userData) {
    const config = { headers: {'Content-Type': 'application/json'} };
    return axios.put("/api/users/update", userData, config);
  },
  // Deletes the user with the given id
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUsers: function (userData) {
    return axios.post("/api/users", userData);
  },
  saveJobById: function (id) {
    return axios.get("/api/users/save/" + id);
  },
  getUserJobs: function () {
    return axios.get("/api/users/myjobs");
  },


  /*
    AUTHENTICATION
  */
  // Login a user
  login: function (login) {
    return axios.post("/api/users/login", login);
  },
  logoutUser: function () {
    return axios.get("/api/users/logout");
  },
  // Signup a user
  signup: function (signup) {
    return axios.post("/api/users/", signup);
  },

  /*
    JOBS
  */
  // Gets all Jobs
  getJobs: function () {
    return axios.get("/api/jobs");
  },
  // Gets the job with the given id
  getJobById: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  getJobByType: function (type) {
    return axios.get("/api/jobs/" + type);
  },
  // Deletes the job with the given id
  deleteJob: function (id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  saveJob: function (data) {
    return axios.post("/api/jobs", data);
  },

  /*
    MESSAGES
  */
  // Gets all Messages
  getMessages: function () {
    return axios.get(`/api/users/messages`);
  },
  // Saves a message to the database
  saveMessage: function (data) {
    return axios.post(`/api/users/messages`, data);
  }
};