import { ProfileAPI } from "../Api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postData: [
    { post: 'HI guys, have a great day!', id: 1, likes: 15 },
    { post: 'Morning vibes', id: 2, likes: 10 },

  ],

  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        post: action.postBody,
        likes: 0
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      return stateCopy;
    }


    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state;
  }
}

export const addPostActionCreator = (postBody) => {
  return {
    type: ADD_POST,
    postBody
  };
}


export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  };
}

export const getProfile = (userId) => {
  return async (dispatch) => {

    let data = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  }
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {

    let data = await ProfileAPI.getStatus(userId);
    dispatch(setStatus(data));
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {

    let data = await ProfileAPI.updateStatus(status);

    if (data.resultCode === 1) {
      dispatch(setStatus(data));
    }
  }
}



export default profileReducer;