import { NavLink } from 'react-router-dom';
import classes from './ChatItem.module.css';

const ChatItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={'/messages/'+ props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}



export default ChatItem;