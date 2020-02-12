import React, { useMemo } from "react";
import PropsTypes from "prop-types";
import { h0 } from "../common/fp";
import dayjs from "dayjs";
import "./DepartDate.css";

function DepartDate(props) {
  const { time, onClick } = props;

  const h0OfDeppart = h0(time);
  const departDate = new Date();

  const departDateString = useMemo(() => {
    return dayjs(h0OfDeppart).format("YYYY-MM-DD");
  }, [h0OfDeppart]);

  const isToday = h0OfDeppart === h0();

  const weekString =
    "周" +
    ["日", "一", "二", "三", "四", "五", "六"][departDate.getDay()] +
    (isToday ? "(今天)" : "");

  return (
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className="depart-week">{weekString}</span>
    </div>
  );
}

DepartDate.propsTypes = {
  time: PropsTypes.number.isRequired,
  onClick: PropsTypes.func.isRequired
};

export default DepartDate;
