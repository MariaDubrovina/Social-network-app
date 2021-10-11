import classes from './Users.module.css';
import userPhoto from '../../assets/images/149071.png'
import React from 'react';
import { NavLink } from 'react-router-dom';
import AppPagination from '../Common/Pagination/Pagination';
import User from './User/User';




const Users = (props) => {

    return <div>
        
        <AppPagination currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                    onPageChanged={props.onPageChanged} pageSize={props.pageSize} />
    {
        
        props.users.map((user) => {
            return (
                <User user={user} key={user.id} isFollowButtonClicled={props.isFollowButtonClicled}
                follow={props.follow} unfollow={props.unfollow} />
            )
        })
  
    
    }
     </div>
}



export default Users;