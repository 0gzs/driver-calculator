import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logging from "../config/logging";
import { IPage } from "../interfaces/page";

const DriverName: React.FC<IPage> = (props) => {
  const { state, dispatch } = props;

  useEffect(() => logging.info(`Loading ${props.name}`));

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLElement>) => e.preventDefault()}>
      <Form.Group className="form-group">
        <Form.Label>Driver Name</Form.Label>
        <Form.Control
          className="form-control"
          value={state.driverName}
          placeholder={"Ex. John"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "name", payload: e.target.value })
          }
        />
      </Form.Group>

      <Link to="/driver-form">
        <Button
          variant={"primary"}
          disabled={state.driverName.length <= 1}
        >
          Next
        </Button>
      </Link>
    </Form>
  );
};

export default DriverName;
