/** @format */

import React, { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";

const index = () => {
  const router = useRouter();
  const Events = getAllEvents();

  const findEventsHandler = (year, month) => {
    // console.log(year, month);
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList Events={Events} />
    </Fragment>
  );
};

export default index;
