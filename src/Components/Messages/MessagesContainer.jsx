import React from 'react';
import { sendMessageCreator } from '../../Redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { AuthRedirect } from '../../HOC/AuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    chatData: state.messagesPage.chatData,
    messageData: state.messagesPage.messageData,   
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageBody) => {
      dispatch(sendMessageCreator(messageBody));
    }
  }
}

const MessagesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Messages);

//let AuthRedirectContainer = AuthRedirect(Messages);
//const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectContainer);


export default MessagesContainer;