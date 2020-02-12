import React, { useMemo } from "react";
import { h0 } from "../common/fp";
import dayjs from "dayjs";
import "./DepartDate.css";

function DepartDate(props) {
  const { time, onClick } = props;

  const departDateString = useMemo(() => {
    return dayjs(time).format("YYYY-MM-DD");
  }, [time]);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default DepartDate;
