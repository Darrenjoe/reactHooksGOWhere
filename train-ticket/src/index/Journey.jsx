import React from "react";
import switchImg from "./imgs/switch.svg";
import "./Journey.css";

function Journey(props) {
  const { from, to, exchangeFromTo, showCtySelector } = props;

  return (
    <div className="journey">
      <div className="journey-station" onClick={() => showCtySelector(true)}>
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div className="journey-station" onClick={() => showCtySelector(false)}>
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
        />
      </div>
    </div>
  );
}

export default Journey;
