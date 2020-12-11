import * as t from "../actions/actionsType";

const initialState = {
  identity: null,
  auth: false,
};

const persistedReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.PERSIST_IDENTITY:
      return { identity: action.data, auth: true };
    case t.LOGOUT:
      return { ...state, identity: "", auth: false };
    default:
      return state;
  }
};

export default persistedReducer;
