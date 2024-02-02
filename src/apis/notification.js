import axios from "axios";
const API = (token) =>
  axios.create({
    baseURL: "http://localhost:8000", //process.env.REACT_APP_SERVER_URL,
    headers: { Authorization: token },
  });
export const notificationHistory = async () => {
  try {
    const token = sessionStorage.getItem("userToken");
    const { data } = await API(token).post("/api/notification/list");
    return data;
  } catch (error) {
    console.log("error in notificationHistory api" + error);
  }
};
