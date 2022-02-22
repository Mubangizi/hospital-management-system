export const initialState = {
  hospitals: [],
  diseases: [],
  user: {},
};

export const actionTypes = {
  SET_HOSPITALS: "SET_HOSPITALS",
  SET_DISEASES: "SET_DISEASES",
  LOGIN_USER: "LOGIN_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOSPITALS:
      return {
        ...state,
        hospitals: action.hospitals,
      };
    case actionTypes.SET_DISEASES:
      return {
        ...state,
        diseases: action.diseases,
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
