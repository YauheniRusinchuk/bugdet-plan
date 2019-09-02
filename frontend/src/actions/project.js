import axios from "axios";
import { tokenConfig } from "./auth";
import {
    GET_PROJECTS,
    GET_DETAIL,
    ADD_PROJECT,
    DELETE_PROJECT,
    ADD_EXPENSE,
} from './types';


export const addExpense = (expense) => (dispatch, getState) => {
    console.log(expense)
    axios
      .post("http://127.0.0.1:8000/api/v1/expense/create/", expense, tokenConfig(getState))
      .then(res => {
        dispatch({
          type: ADD_EXPENSE,
          payload: res.data
        });
      })
      .catch(err =>
          console.log(err.response)
        //dispatch(returnErrors(err.response.data, err.response.status))
      );
}



// GET PROJECT
export const getProjects = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/v1/projects/all", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err =>
        console.log(err.response)
      //dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE PROJECT
export const deleteProject = id => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/v1/projects/all/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};




// GET PROJECT DETAIL
export const getProjectDetail = (id) => (dispatch, getState) => {
  axios
    .get(`http://127.0.0.1:8000/api/v1/projects/all/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DETAIL,
        payload: res.data
      });
    })
    .catch(err =>
        console.log(err.response)
      //dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addProject = (project) => (dispatch, getState) => {
  axios
    .post(`http://127.0.0.1:8000/api/v1/projects/all/`, project, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      });
    })
    .catch(err =>
      console.log(err.response)
    );
};
