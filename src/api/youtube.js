import axios from "axios";
const KEY = "AIzaSyDAFKq1OFzQiRrf4ipikRcsqvlEU8gm8G4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  },
  headers: {}
});
