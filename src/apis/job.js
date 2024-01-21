import axios from "axios";
const API = (token) =>
  axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { Authorization: token },
  });
export const listAllJob = async (body) => {
  try {
    const token = sessionStorage.getItem("userToken");
    const { data } = await API(token).post("/api/job", body);
    return data;
  } catch (error) {
    console.log("error in listAllJob api" + error);
  }
};
export const listMyJob = async (body) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).get(`/api/job/myJob`);
    return data;
  } catch (error) {
    console.log("error in listMyJob API " + error);
  }
};
export const listMyJobApply = async (body) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/job/listJobApply`);
    return data;
  } catch (error) {
    console.log("error in listMyJob API " + error);
  }
};
