import axios from "axios";

export default {
  // Create forum

  createForum: async function (forum) {
    return await axios.post("/api/forums", forum);
  },
  //get all forums from db
  getAllForum: async function () {
    return await axios.get("/api/forums");
  },
  deleteForum: async function (forumId) {
    return await axios.delete("/api/forums/" + forumId);
  },
};
