import React from 'react';

import styles from './UserProfile.module.scss';

type UserProfileType = {
  avatar: string;
  name: string;
  subInfo: string;
};

export const UserProfile = ({ avatar, name, subInfo }: UserProfileType) => {
  return (
    <div className={styles.userProfile}>
      <img src={avatar} alt="user avatar" className={styles.userAvatar} />
      <div className={styles.userInfo}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userSubInfo}>{subInfo}</span>
      </div>
    </div>
  );
};
