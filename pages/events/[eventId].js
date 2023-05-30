/** @format */

import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/UI/error-alert";

const EventDetails = () => {
  const router = useRouter();
  const params = router.query;
  const eventId = params.eventId;
  const Event = getEventById(eventId);
  if (!Event) {
    return (
      <ErrorAlert>
        <p>No Event found! </p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={Event.title} />
      <EventLogistics
        date={Event.date}
        address={Event.location}
        image={Event.image}
        imageAlt={Event.title}
      />
      <EventContent>
        <p>{Event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
