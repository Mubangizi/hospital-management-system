export const initialState = {
  hospitals: [],
  diseases: [],
};

export const actionTypes = {
  SET_HOSPITALS: "SET_HOSPITALS",
  SET_DISEASES: "SET_DISEASES",
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
    default:
      return state;
  }
};

export default reducer;
