import React from "react";
import {
  Col,
  Row,
  InputGroup,
  FormControl,
  Dropdown,
  Button
} from "react-bootstrap";

const TextField = props => {
  return (
    <div>
      <label htmlFor={props.fieldname} className="control-label text-left">
        {props.labeltext}
      </label>
      <InputGroup className="mb-3">
        <FormControl
          id={props.fieldname}
          type="text"
          placeholder={props.placeholdertext}
          name={props.fieldname}
          value={props.fieldvalue}
          onChange={props.handler}
        />
      </InputGroup>
    </div>
  );
};

const EmailField = props => {
  return (
    <div>
      <label htmlFor={props.fieldname} className="control-label">
        {props.labeltext}
      </label>
      <InputGroup className="mb-3">
        <FormControl
          id={props.fieldname}
          type="email"
          placeholder={props.placeholdertext}
          name={props.fieldname}
          value={props.fieldvalue}
          onChange={props.handler}
        />
      </InputGroup>
    </div>
  );
};

const DropdownField = props => {
  return (
    <div>
      <label htmlFor={props.fieldname} className="control-label">
        {props.labeltext}
      </label>
    </div>
  );
};

export { TextField, EmailField };
