import React, { memo } from "react";
import PropTypes from "prop-types";

import "./Account.css";

const Account = memo(function Account(props) {
  const { price = 0, length } = props;

  return (
    <div className="account">
      <div></div>
    </div>
  );
});

Account.propTypes = {
  price: PropTypes.number,
  length: PropTypes.number.isRequired
};

export default Account;
