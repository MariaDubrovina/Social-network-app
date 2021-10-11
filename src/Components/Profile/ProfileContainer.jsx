import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, updateStatus} from '../../Redux/profileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { AuthRedirect } from '../../HOC/AuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  componentDidMount() {
      let userId = this.props.match.params.userId;

      if (!userId) {
        userId = this.props.id;
      }

      this.props.getProfile(userId);
      this.props.getUserStatus(userId);
      
  }

  render() {

      return (
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
        updateStatus={this.props.updateStatus} />
        
      )

  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

let Container = compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateStatus}),
  withRouter,
  AuthRedirect
)(ProfileContainer);



export default Container;


