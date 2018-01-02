import axios from "axios";

let initialState = {
  currentStats: [],
  goals: [],
  currentSteps: [],
  goals_end: [],
  goals_start: [],
  userBadges: [],
  friendsGoals: [],
  testSteps: 500000,
  goal_id: [],
  searchResults: []
};

// CONSTANTS
const GET_GOALS_DATA = "GET_GOALS_DATA";
const UPDATE_GOALS = "UPDATE_GOALS";
const GET_BADGES = "GET_BADGES";
const TOGGLE_LOG = "TOGGLE_LOG";
const GET_FRIENDS_GOALS = "GET_FRIENDS_GOALS";
const HANDLE_UPVOTE = "HANDLE_UPVOTE";
const HANDLE_UNFOLLOW = "HANDLE_UNFOLLOW";
const COMPLETE_GOAL = "COMPLETE_GOAL";
const SEARCH_FRIENDS = "SEARCH_FRIENDS";
const FOLLOW = "FOLLOW";

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GOALS_DATA + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case GET_GOALS_DATA + "_FULFILLED":
      return Object.assign({}, state, {
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

    case COMPLETE_GOAL + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case COMPLETE_GOAL + "_FULFILLED":
      return Object.assign({}, state, {
        goal_id: action.payload.data,
        isLoading: false
      });
    case COMPLETE_GOAL + "_REJECTED":
      console.log(action.payload);
      break;

    case SEARCH_FRIENDS + "_PENDING":
      return Object.assign({}, state, { isLoading: true });

    case SEARCH_FRIENDS + "_FULFILLED":
      return Object.assign({}, state, {
        searchResults: action.payload.data,
        isLoading: false
      });
    case SEARCH_FRIENDS + "_REJECTED":
      console.log(action.payload);
      break;
    case SEARCH_FRIENDS:
      return Object.assign({}, state, { searchResults: action.payload.data });

    case FOLLOW + "_PENDING":
      return Object.assign({}, state, { isLoading: true });
    case FOLLOW + "_FULFILLED":
      return Object.assign({}, state, {
        friendsGoals: action.payload.data,
        isLoading: false
      });
    case FOLLOW + "_REJECTED":
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

export function completeGoal(id) {
  return {
    type: COMPLETE_GOAL,
    payload: axios
      .post("/api/completedgoal", { goal_id: id })
      .then(response => response)
  };
}

export function handleUnfollow(id) {
  return {
    type: HANDLE_UNFOLLOW,
    payload: axios.post("/api/unfollow", { id: id }).then(response => response)
  };
}

export function searchFriends(value) {
  if (value) {
    return {
      type: SEARCH_FRIENDS,
      payload: axios.get("/api/search/" + value).then(results => results)
    };
  } else {
    return {
      type: SEARCH_FRIENDS,
      payload: { data: [] }
    };
  }
}

export function handleFollow(id) {
  return {
    type: FOLLOW,
    payload: axios.post("/api/follow", { id: id }).then(response => response)
  };
}
