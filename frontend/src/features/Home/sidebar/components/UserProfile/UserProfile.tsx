import React from 'react';

import styles from './UserProfile.module.scss';

type UserProfileType = {
  avatar: string;
  name: string;
  subInfo: string;
  miniSb?: boolean;
};

export const UserProfile = ({ avatar, name, subInfo, miniSb = false }: UserProfileType) => {
  return (
    <div className={`${styles.userProfile} ${miniSb ? styles.miniSb : ''}`}>
      <img src={avatar} alt="user avatar" className={styles.userAvatar} />
      {!miniSb && (
        <div className={styles.userInfo}>
          <span className={styles.userName}>{name}</span>
          <span className={styles.userSubInfo}>{subInfo}</span>
        </div>
      )}
    </div>
  );
};
