import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Event.module.scss';

const Event = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <div className={styles.wrapper}>
      <img src={'/images/event_cover_photo.png'} alt="event banner" className={styles.banner_image} />
      <div className={styles.title}>
        <img src={'/images/party.png'} alt="party emoji" className={styles.partyemoji} />
        <h1> {event.name}</h1>
      </div>
      <h2>Hosted by {event.hostName}</h2>
      <div className={styles.attendance}>
        <img src="/images/going_button.png" alt="going button" />
        <img src="/images/maybe_button.png" alt="maybe button" />
        <img src="/images/not_going_button.png" alt="not going button" />
      </div>
      <div className={styles.invitation_settings}>
        <img src="/images/invite_button.png" alt="invite button" className={styles.invite_btn} />
        <img src="/images/settings_button.png" alt="settings button" className={styles.settings_btn} />
      </div>
      <div className={styles.dates}>
        <img src={'/images/pin.png'} alt="pin emoji" className={styles.emoji} />
        <div>
          <p>{event.startDate}</p>
          <p>to {event.endDate}</p>
          <p className={styles.subText}>Add to calendar</p>
        </div>
      </div>
      <div className={styles.location}>
        <img src={'/images/calendar.png'} alt="calendar emoji" className={styles.emoji} />
        <div>
          <p>{event.location}</p>
          <p className={styles.subText}>Open in maps</p>
        </div>
      </div>
      <div className={styles.details}>
        <img src="/images/details_button.png" alt="details button" className={styles.detais_btn} />
        <img src="/images/posts_button.png" alt="posts button" className={styles.posts} />
      </div>
      <div>
        <p className={styles.subText_description}>Just a lowkey dinner to celebrate my 22nd. Would love to see you </p>
      </div>
    </div>
  );
};

export default Event;
