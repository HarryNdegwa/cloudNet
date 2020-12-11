import * as t from "../actions/actionsType";

const initialState = {
  loginLoading: false,
  loginError: "",
  registerLoading: false,
  registerError: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_START:
      return { ...state, loginLoading: true };
    case t.LOGIN_SUCCESS:
      return { ...state, loginLoading: false };
    case t.LOGIN_ERROR:
      return { ...state, loginLoading: false, loginError: action.data };
    case t.REGISTER_START:
      return { ...state, registerLoading: true };
    case t.REGISTER_SUCCESS:
      return { ...state, registerLoading: false };
    case t.REGISTER_ERROR:
      return { ...state, registerLoading: false, registerError: action.data };
    default:
      return state;
  }
};

export default authReducer;
