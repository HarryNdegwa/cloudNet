import * as t from "./actionsType";

export const persistIdentityAction = (data) => {
  return {
    type: t.PERSIST_IDENTITY,
    data: data,
  };
};

export const logoutAction = () => {
  return {
    type: t.LOGOUT,
  };
};
