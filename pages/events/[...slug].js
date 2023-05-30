/** @format */

import React, { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/error-alert";

const FiltredEventsPage = () => {
  const router = useRouter();
  const params = router.query.slug;
  console.log(params);
  if (!params) {
    return <p className="center">loading...</p>;
  }

  const year = +params[0];
  const month = +params[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events </Button>
        </div>
      </Fragment>
    );
  }
  const eventsByYearMonth = getFilteredEvents({ year: year, month: month });
  if (!eventsByYearMonth || eventsByYearMonth.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <div>No events in this date</div>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events </Button>
        </div>
      </Fragment>
    );
  }

  // console.log(eventsByYearMonth);
  const date = new Date(year, month);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList Events={eventsByYearMonth} />
    </Fragment>
  );
};

export default FiltredEventsPage;
