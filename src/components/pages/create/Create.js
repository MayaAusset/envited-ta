import React, { useState } from 'react';
import styles from './Create.module.scss';
import CTA from '../../elements/CTA';
import { Link } from 'react-router-dom';

const Create = () => {
  const [event, setEvent] = useState({
    name: '',
    hostName: '',
    startDate: '',
    endDate: '',
    location: '',
    picture: '',
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setEvent({
      ...event,
      [evt.target.name]: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>CREATE YOUR EVENT</h1>
      <div className={styles.form_wrapper}>
        <img src={'/images/envited_logo_white_background.png'} alt="envited logo" />
        <form>
          <label for="name">
            Name of the event
            <input
              type="text"
              id="name"
              name="name"
              value={event.name}
              onChange={handleChange}
              placeholder="Type the name of the event..."
            />
          </label>
          <br />

          <label for="hostname">
            Host Name
            <input
              type="text"
              id="hostname"
              name="hostName"
              value={event.hostName}
              onChange={handleChange}
              placeholder="Type the name of the host..."
            />
          </label>
          <br />

          <label for="startDate">
            Start Date
            <input type="date" id="startDate" value={event.startDate} name="startDate" onChange={handleChange} />
          </label>
          <br />
          <label for="endDate">
            End Date
            <input type="date" id="endDate" value={event.endDate} name="endDate" onChange={handleChange} />
          </label>
          <br />

          <label for="location">
            Event Location
            <input
              type="textarea"
              id="location"
              value={event.location}
              name="location"
              onChange={handleChange}
              placeholder="Type the location of the event..."
            />
          </label>
          <br />

          <label for="picture">
            Click to upload event's picture
            <input
              type="file"
              id="picture"
              value={event.picture}
              name="picture"
              alt="event image"
              onChange={handleChange}
              className={styles.image_btn}
              style={{ display: 'none' }}
              capture
            />
          </label>
          <br />
        </form>
      </div>
      <CTA>
        <Link to={'/event'} state={{ event: event }}>
          Next
        </Link>
      </CTA>
    </div>
  );
};

export default Create;
