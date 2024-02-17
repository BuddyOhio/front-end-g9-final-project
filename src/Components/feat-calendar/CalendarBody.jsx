import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useGlobalContext } from "../Context";

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

// สร้าง function filterActivities เพื่อหา activity date ในเดือนที่ user เลือก
const filterActivities = (activities, month) => {
  const monthAddHours = month.add(7, "hour");
  const selectedMonth = monthAddHours.$M + 1;
  const selectedYear = monthAddHours.$y;

  console.log("month => ", month);
  console.log("monthAddHours => ", monthAddHours);

  // Initialize an array to store the matching days
  const filterDates = [];

  // Filter example array based on the selected month and year
  activities.forEach((activity) => {
    const activityMonth = activity.activityDate.getMonth() + 1;
    const activityYear = activity.activityDate.getFullYear();

    if (activityMonth === selectedMonth && activityYear === selectedYear) {
      const dayOfMonth = activity.activityDate.getDate();
      filterDates.push(dayOfMonth);
    }
  });

  console.log("filterDates => ", filterDates);

  // Using a Set to store unique elements
  let uniqueSet = new Set(filterDates);

  // Converting the Set back to an array to preserve the order
  let matchingDates = [...uniqueSet];

  // Sorting the array in ascending order
  let sortedMatchingDates = matchingDates.sort((a, b) => a - b);
  // console.log(sortedMatchingDates);

  return sortedMatchingDates;
};

const CalendarBody = ({ setDateByUser }) => {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const { userActivities } = useGlobalContext();

  // สร้าง function เพื่อ filter activity date ของเดือนใน parameter
  const filterHighlightedDays = (date) => {
    const controller = new AbortController();

    // เรียกใช้ function filterActivities เพื่อหา activity date ที่ตรงกับ เดือนที่ user เลือก
    const daysToHighlight = filterActivities(userActivities, date);
    setHighlightedDays(daysToHighlight);
    setIsLoading(false);

    requestAbortController.current = controller;
  };

  // เรียกใช้ทุกครั้งที่มีการเปลี่ยนเดือน และรับ parameter date เข้ามา
  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setHighlightedDays([]);
    // เรียกใช้เพื่อหา activity date ของแต่ละเดือน
    filterHighlightedDays(date);
  };

  useEffect(() => {
    if (userActivities.length > 0) {
      filterHighlightedDays(initialValue);
    }
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, [userActivities]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        className="calendar__body"
        views={["year", "month", "day"]}
        showDaysOutsideCurrentMonth
        defaultValue={initialValue}
        // loading={isLoading}
        onMonthChange={handleMonthChange}
        onChange={(newValue) => setDateByUser(newValue.toDate())}
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
