export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfoAction = (name, status) => ({
  type: SET_USER_INFO,
  payload: { name, status },
});
