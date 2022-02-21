import axios from "axios";

import { API_BASE_URL } from "../config";
import { actionTypes } from "../reducer";

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getDiseases = async (dispatch) => {
  await API.get(`/diseases`)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_DISEASES,
        diseases: res.data.data.diseases,
      });
    })
    .catch((Err) => {
      console.log(`An error occured: ${Err}`);
    });
};

export const getHospitals = async (dispatch) => {
  await API.get(`/hospitals`)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_HOSPITALS,
        hospitals: res.data.data.hospitals,
      });
    })
    .catch((Err) => {
      console.log(`An error occured: ${Err}`);
    });
};
