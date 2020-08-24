import axios from "axios";

export default {
  // Create forum
  
  createForum: function(forum) {
    return axios.post("/api/forums", forum);
  }
};

