import classes from './User.module.css';
import userPhoto from '../../../assets/images/149071.png'
import React from 'react';
import { NavLink } from 'react-router-dom';





const User = (props) => {

    return <div key={props.key} >
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small !=null ? props.user.photos.small : userPhoto} className={classes.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed ? <button disabled={props.isFollowButtonClicled.some(id => id === props.user.id)} onClick={() => {
                                            
                                                     props.unfollow(props.user.id);
                                                
                                                
                                        }} >Unfollow</button> : 

                                        <button disabled={props.isFollowButtonClicled.some(id => id === props.user.id)} onClick={() => {
                                           
                                                     props.follow(props.user.id);
                                               
                                             
                                        }}>Follow</button>} 
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {props.user.name}
                        </div>
                        <div>
                            {props.user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'user.location.country'}
                        </div>
                        <div>
                            {'user.location.city'}
                        </div>
                    </span>
                </span>
            </div>
           
    
    }



export default User;