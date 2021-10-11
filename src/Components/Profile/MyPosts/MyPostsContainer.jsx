import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,    
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postBody) => {
      dispatch(addPostActionCreator(postBody));
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;