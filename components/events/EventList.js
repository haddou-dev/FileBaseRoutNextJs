/** @format */

import React from "react";
import EventCard from "./EventCard";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { Events } = props;
  console.log(Events);

  return (
    <ul className={classes.list}>
      {Events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
