import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isfetching: true,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
   
    case FETCH_START:
      return{
        ...state,
        characters: [],
        isfetching: true,
        error: ""
      }
    case FETCH_SUCCESS:
    return{
      ...state,
      characters: action.payload,
      isfetching: false,
      error: ""
    }
    case FETCH_FAIL:
    return{
      ...state,
      characters: [],
      isfetching: false,
      error: action.payload
    }
    default:
      return state;
  }
};
