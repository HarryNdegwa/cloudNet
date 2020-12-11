import * as t from "./actionsType";
import axios from "../../axiosApi";

import { persistIdentityAction } from "./toPersistActions";
import { history } from "../../index";

const loginStart = () => {
  return {
    type: t.LOGIN_START,
  };
};
const loginSuccess = () => {
  return {
    type: t.LOGIN_SUCCESS,
  };
};
const loginError = (data) => {
  return {
    type: t.LOGIN_ERROR,
    data: data,
  };
};

export const loginThunkAction = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("login", data)
      .then((res) => {
        dispatch(loginSuccess());
        dispatch(persistIdentityAction(res.headers.key));
      })
      .catch((error) => {
        if (error.response.status === 403) {
          dispatch(loginError("Invalid credentials!"));
        }
      });
  };
};

const registerStart = () => {
  return {
    type: t.REGISTER_START,
  };
};

const registerSuccess = () => {
  return {
    type: t.REGISTER_SUCCESS,
  };
};

const registerError = (data) => {
  return {
    type: t.REGISTER_ERROR,
    data: data,
  };
};

export const registerThunkAction = (data) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios
      .post("api/v1/account/create", data)
      .then((res) => {
        dispatch(registerSuccess());
        history.push("/login");
      })
      .catch((error) => {
        dispatch(registerError(error.response.data));
      });
  };
};
