import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/149071.png'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/*<div className={classes.wall}>
        <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
  </div>*/}
      <div className={classes.descriptionBlock}>
        <span>
          <img src={props.profile.photos.small !=null ? props.profile.photos.small : userPhoto} />
        </span>
        <span>
          <div className={classes.userName}>
            {props.profile.fullName}
          </div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          
        </span>
      </div>

    </div>
  );
}

export default ProfileInfo;