import axios from "axios";

let initialState = {
  currentStats: [],
  goals: [],
  currentSteps: [],
  goals_end: [],
  goals_start: [],
  testSteps: 500000
};

// CONSTANTS
const GET_GOALS_DATA = "GET_GOALS_DATA";
const UPDATE_GOALS = "UPDATE_GOALS";

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GOALS_DATA + "_PENDING":
      return Object.assign({}, state, { isLoading: true });
      break;
    case GET_GOALS_DATA + "_FULFILLED":
      return Object.assign({}, state, {
        goals_end: action.payload.data.goals[0].goal_value,
        goals_start: action.payload.data.goals[0].starting_value,
        currentStats: action.payload.data.currentstats,
        goals: action.payload.data.goals,
        isLoading: false
      });
      break;
    case GET_GOALS_DATA + "_REJECTED":
      console.log(action.payload);
      break;
    case UPDATE_GOALS:
      console.log("action", action);
      return Object.assign({}, state, {
        goals: action.payload
      });
      break;
    default:
      return state;
  }
}

// ACTION BUILDERS

export function getCurrentGoalsAndData() {
  return {
    type: GET_GOALS_DATA,
    payload: axios.get("/api/fitbit/currentdata").then(response => {
      return response;
    })
  };
}

export function updateGoals(goalsArray) {
  return {
    type: UPDATE_GOALS,
    payload: goalsArray
  };
}
