import React from 'react';
import { connect } from 'react-redux';
import {logout } from '../../Redux/authReducer';
import AppHeader from './Header';


class HeaderContainer extends React.Component {
  render() {

      return (
        <AppHeader {...this.props} />
        
      )

  }
}


let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}





export default connect(mapStateToProps, {logout}) (HeaderContainer);


