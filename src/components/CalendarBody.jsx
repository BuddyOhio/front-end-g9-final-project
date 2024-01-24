import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

// function getRandomNumber(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      //   const daysInMonth = date.daysInMonth();
      //   const daysToHighlight = [1, 2, 3, 4, 5, 6].map(() =>
      //     getRandomNumber(1, daysInMonth)
      //   );
      const daysToHighlight = [1, 12, 16, 29, 4, 9];

      //   console.log("daysToHighlight: ", daysToHighlight);

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs(new Date());

const ServerDay = (props) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🏆" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
};

const CalendarBody = () => {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    // console.log(controller.signal);

    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    // if (requestAbortController.current) {
    //   // make sure that you are aborting useless requests
    //   // because it is possible to switch between months pretty quickly
    //   requestAbortController.current.abort();
    // }
    console.log(`current month: ${date.$M + 1} ${date.$y}`);
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        views={["year", "month", "day"]}
        showDaysOutsideCurrentMonth
        defaultValue={initialValue}
        // loading={isLoading}
        onMonthChange={handleMonthChange}
        onChange={(newValue) =>
          console.log(
            `date select: ${newValue.$D} ${newValue.$M + 1} ${newValue.$y}`
          )
        }
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CalendarBody;
