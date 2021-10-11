import { followAPI, unfollowAPI, usersAPI } from "../Api/api";
import { updateObjectInStateArray } from "../Components/Common/Helpers/object_helper";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TURN_ON_LOADER = 'TURN_ON_LOADER';
const DISABLE_BUTTON = 'DISABLE_BUTTON';

let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  isFollowButtonClicled: []
}

const usersReducer = (state = initialState, action) => {



  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInStateArray(state.users, action.userId, 'id', {followed:true})
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInStateArray(state.users, action.userId, 'id', {followed:false})
      }

    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }

    case TURN_ON_LOADER: {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }

    case DISABLE_BUTTON: {
      return {
        ...state,
        isFollowButtonClicled: action.isFollowButtonClicled
          ? [...state.isFollowButtonClicled, action.userId]
          : state.isFollowButtonClicled.filter(id => id != action.userId)
      }
    }

    default:
      return state;
  }
}

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
}

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  };
}

export const turnOnLoader = (isLoading) => {
  return {
    type: TURN_ON_LOADER,
    isLoading
  };
}

export const disableButton = (isFollowButtonClicled, userId) => {
  return {
    type: DISABLE_BUTTON,
    isFollowButtonClicled, userId
  };
}

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(turnOnLoader(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(turnOnLoader(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

  }
}

const followUnfollowFunc = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(disableButton(true, userId));
  let data = await apiMethod(userId)

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(disableButton(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFunc(dispatch, userId, followAPI.followUser, followSuccess);
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFunc(dispatch, userId, unfollowAPI.unfollowUser, unfollowSuccess);
  }
}




export default usersReducer;