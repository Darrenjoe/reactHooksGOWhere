import React, { memo } from "react";
import PropTypes from "prop-types";

import "./Ticket.css";

const Ticket = memo(function Ticket(props) {
  return (
    <div className="ticket">
      <div></div>
    </div>
  );
});

Ticket.propTypes = {};

export default Ticket;
