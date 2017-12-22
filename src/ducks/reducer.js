import axios from "axios";

let initialState = {
  currentStats: [],
  goals: [],
  currentSteps: [],
  goals_end: [],
  goals_start: [],
  userBadges: [],
  friendsGoals: [],
  testSteps: 500000
};

// CONSTANTS
const GET_GOALS_DATA = "GET_GOALS_DATA";
const UPDATE_GOALS = "UPDATE_GOALS";
const GET_BADGES = "GET_BADGES";
const TOGGLE_LOG = "TOGGLE_LOG";
const GET_FRIENDS_GOALS = "GET_FRIENDS_GOALS";
const HANDLE_UPVOTE = "HANDLE_UPVOTE";
const HANDLE_UNFOLLOW = "HANDLE_UNFOLLOW";

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GOALS_DATA + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case GET_GOALS_DATA + "_FULFILLED":
      return Object.assign({}, state, {
        goals_end: action.payload.data.goals[0].goal_value,
        goals_start: action.payload.data.goals[0].starting_value,
        currentStats: action.payload.data.currentstats,
        goals: action.payload.data.goals,
        isLoading: false
      });
    case GET_GOALS_DATA + "_REJECTED":
      console.log(action.payload);
      break;

    case UPDATE_GOALS:
      return Object.assign({}, state, { goals: action.payload });

    case GET_BADGES + "_PENDING":
      return Object.assign({}, state, { isLoading: true });
    case GET_BADGES + "_FULFILLED":
      return Object.assign({}, state, {
        userBadges: action.payload.data,
        isLoading: false,
        logged: "Log Out"
      });
    case GET_BADGES + "_REJECTED":
      console.log(action.payload);
      break;

    case TOGGLE_LOG:
      return Object.assign({}, state, { logged: !state.logged });
    case GET_FRIENDS_GOALS + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case GET_FRIENDS_GOALS + "_FULFILLED":
      return Object.assign({}, state, {
        friendsGoals: action.payload.data,
        isLoading: false
      });
    case GET_FRIENDS_GOALS + "_REJECTED":
      console.log(action.payload);
      break;

    case HANDLE_UPVOTE + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case HANDLE_UPVOTE + "_FULFILLED":
      return Object.assign({}, state, {
        friendsGoals: action.payload.data,
        isLoading: false
      });
    case HANDLE_UPVOTE + "_REJECTED":
      console.log(action.payload);
      break;

    case HANDLE_UNFOLLOW + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case HANDLE_UNFOLLOW + "_FULFILLED":
      return Object.assign({}, state, {
        friendsGoals: action.payload.data,
        isLoading: false
      });
    case HANDLE_UNFOLLOW + "_REJECTED":
      console.log(action.payload);
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

export function getBadges() {
  return {
    type: GET_BADGES,
    payload: axios.get("/api/badges").then(response => {
      return response;
    })
  };
}

export function getFriendsGoals() {
  return {
    type: GET_FRIENDS_GOALS,
    payload: axios.get("/api/friendgoals").then(response => {
      return response;
    })
  };
}

export function handleUpvote(id) {
  return {
    type: HANDLE_UPVOTE,
    payload: axios.post("/api/upvotes", { id: id }).then(response => response)
  };
}

export function handleUnfollow(id) {
  return {
    type: HANDLE_UNFOLLOW,
    payload: axios.post("/api/unfollow", { id: id }).then(response => response)
  };
}
