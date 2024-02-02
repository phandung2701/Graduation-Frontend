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
export const getAllTxn = async () => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).get(`/api/transaction`);
    return data;
  } catch (error) {
    console.log("error in getAllTxn API " + error);
  }
};
export const getListTxns = async () => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/transaction/list`);
    return data;
  } catch (error) {
    console.log("error in getListTxn API " + error);
  }
};

export const applyJob = async (req) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/job/apply`, req);
    return data;
  } catch (error) {
    console.log("error in applyJob API " + error);
  }
};

export const getApplicationList = async (job) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/job/applicationList`, job);
    return data;
  } catch (error) {
    console.log("error in getListTxn API " + error);
  }
};

export const approveJob = async (job) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/job/approve`, job);
    return data;
  } catch (error) {
    console.log("error in getListTxn API " + error);
  }
};
export const doneJob = async (job) => {
  try {
    const token = sessionStorage.getItem("userToken");

    const { data } = await API(token).post(`/api/job/done`, job);
    return data;
  } catch (error) {
    console.log("error in getListTxn API " + error);
  }
};
