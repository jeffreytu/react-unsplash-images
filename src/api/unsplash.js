import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID tqlgjwZc30v0X2PBugOQat1lntj2KCW66RU6IZ6L5Tw",
  },
});
