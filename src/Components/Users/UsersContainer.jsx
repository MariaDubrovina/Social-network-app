import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, disableButton, requestUsers } from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { AuthRedirect } from '../../HOC/AuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getIsFollowButtonClicled, getIsLoading, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users_selectors';


class UsersContainer extends React.Component {


  componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
      
  }

  onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.requestUsers(pageNumber, this.props.pageSize)
  
  }

  render() {

      return <>
        {this.props.isLoading ? <Preloader /> : 
        <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        isFollowButtonClicled={this.props.isFollowButtonClicled}
                         />
        }
      </>

  }
}


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    isFollowButtonClicled: getIsFollowButtonClicled(state),
    
  }
}


let Container = compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, disableButton, requestUsers}),
  AuthRedirect
)(UsersContainer);



export default Container;

