import React from 'react';
import  './ProfileInfo.css';

const ProfileInfo = () => {
    return(
      <div className='ProfileInfo'>
        <img className="ProfileAva" src="https://pbs.twimg.com/media/E247SyoVEAUskkc.jpg" alt="" />
         <h1 className='ProfileName'>
          <div>Daniel</div>
          <div>Efimenko</div>
         </h1>
      </div>
    )
}

export default ProfileInfo