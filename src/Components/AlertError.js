import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";
function AlertError() {
  return (
    <Fragment>
      <Alert variant="warning" className="w-50 mx-auto text-center">
        this is invalid city, please write valid city
      </Alert>
    </Fragment>
  );
}
export default AlertError;
