import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Event.module.scss';

const Event = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <div className={styles.wrapper}>
      <img src="" alt="event banner" />
      <h1>🎉 {event.name}e</h1>
      <h2>Hosted by {event.hostName}</h2>
      <div className={styles.attendance}>
        <img src="" alt="event banner" />
        <img src="" alt="event banner" />
        <img src="" alt="event banner" />
      </div>
      <div className={styles.invitation_settings}>
        <button>✉️ Invite a friend</button>
        <button>...</button>
      </div>
      <div className={styles.dates}>
        <img/>
        <div>
          <p>{event.startDate}</p>
          <p>to {event.endDate}</p>
          <p className={styles.addToCal}>Add to calendar</p>
        </div>
      </div>
      <div className={styles.location}></div>
      <div className={styles.details}></div>
      <div>
        <p>DESCRIPTION HERE</p>
      </div>
    </div>
  );
};

export default Event;
