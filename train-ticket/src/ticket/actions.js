export const ACTION_SET_DEPART_DATE = "SET_DEPART_DATE";
export const ACTION_SET_ARRIVE_DATE = "SET_ARRIVE_DATE";
export const ACTION_SET_DEPART_TIME_STR = "SET_DEPART_TIME_STR";
export const ACTION_SET_ARRIVE_TIME_STR = "SET_ARRIVE_TIME_STR";
export const ACTION_SET_DEPART_STATION = "SET_DEPART_STATION";
export const ACTION_SET_ARRIVE_STATION = "SET_ARRIVE_STATION";
export const ACTION_SET_TRAIN_NUMBER = "SET_TRAIN_NUMBER";
export const ACTION_SET_DURATION_STR = "SET_DURATION_STR";
export const ACTION_SET_TICKETS = "SET_TICKETS";
export const ACTION_SET_IS_SCHEDULE_VISIBLE = "SET_IS_SCHEDULE_VISIBLE";
export const ACTION_SET_SEARCH_PARSED = "SET_SEARCH_PARSED";

export function setDepartdate(departDate) {
  return {
    type: ACTION_SET_DEPART_DATE,
    payload: departDate
  };
}
export function setArrivedate(arriveDate) {
  return {
    type: ACTION_SET_ARRIVE_DATE,
    payload: arriveDate
  };
}
export function setDeparttimestr(departTimeStr) {
  return {
    type: ACTION_SET_DEPART_TIME_STR,
    payload: departTimeStr
  };
}
export function setArrivetimestr(arriveTimeStr) {
  return {
    type: ACTION_SET_ARRIVE_TIME_STR,
    payload: arriveTimeStr
  };
}
export function setDepartstation(departStation) {
  return {
    type: ACTION_SET_DEPART_STATION,
    payload: departStation
  };
}
export function setArrivestation(arriveStation) {
  return {
    type: ACTION_SET_ARRIVE_STATION,
    payload: arriveStation
  };
}
export function setTrainnumber(trainNumber) {
  return {
    type: ACTION_SET_TRAIN_NUMBER,
    payload: trainNumber
  };
}
export function setDurationstr(durationStr) {
  return {
    type: ACTION_SET_DURATION_STR,
    payload: durationStr
  };
}
export function setTickets(tickets) {
  return {
    type: ACTION_SET_TICKETS,
    payload: tickets
  };
}
export function setIsschedulevisible(isScheduleVisible) {
  return {
    type: ACTION_SET_IS_SCHEDULE_VISIBLE,
    payload: isScheduleVisible
  };
}

export function toggleIsschedulevisible(isScheduleVisible) {
  return (dispatch, getState) => {
    const { isScheduleVisible } = getState();

    dispatch(setIsschedulevisible(!isScheduleVisible));
  };
}

export function setSearchparsed(searchParsed) {
  return {
    type: ACTION_SET_SEARCH_PARSED,
    payload: searchParsed
  };
}
