import React, { useEffect, useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) =>  {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChanged = (e) => {
    setStatus(e.currentTarget.value);
  }

    return (
      <div>

            {!editMode &&
              <div>
                <span onDoubleClick={activateEditMode} >{status || 'Add status'}</span>
              </div>
            }

            {editMode &&
              <div>
                <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
            }
      </div>
    );

  
}

export default ProfileStatusWithHooks;