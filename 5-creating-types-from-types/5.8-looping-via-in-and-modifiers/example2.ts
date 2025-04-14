// Imagine we want to declare a repetitive type like a daily schedule:

type WorkSchedule = {
  Monday: {
    start: string;
    end: string;
  };
  Tuesday: {
    start: string;
    end: string;
  };
  Wednesday: {
    start: string;
    end: string;
  };
  Thursday: {
    start: string;
    end: string;
  };
  Friday: {
    start: string;
    end: string;
  };
};

// Instead, we can loop over union members via index access syntax with the `in` operator
type Workday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

type Schedule = {
  // Read as "for each day in Workday"
  [day in Workday]: {
    start: string;
    end: string;
  };
};

const schedule: Schedule = {
  Monday: { start: "9am", end: "5pm" },
  Tuesday: { start: "9am", end: "5pm" },
  Wednesday: { start: "9am", end: "5pm" },
  Thursday: { start: "9am", end: "5pm" },
  Friday: { start: "9am", end: "3pm" },
};
