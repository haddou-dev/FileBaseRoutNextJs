/** @format */

import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "@/components/events/EventList";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    // <Layout>
      <div>
        <EventList Events={featuredEvents} />
      </div>
    // </Layout>
  );
};

export default HomePage;
