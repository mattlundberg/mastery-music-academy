import React from "react";

const TextField = props => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={props.fieldname} className="control-label">
          {props.title}
        </label>
        <input
          className="form-control"
          id={props.fieldname}
          type="text"
          placeholder={props.placeholdertext}
          name={props.fieldname}
          value={props.fieldvalue}
          onChange={props.handler}
        />
      </div>
    </div>
  );
};

const PhoneField = props => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={props.fieldname} className="control-label">
          {props.title}
        </label>
        <input
          className="form-control"
          id={props.fieldname}
          type="tel"
          placeholder={props.placeholdertext}
          name={props.fieldname}
          value={props.fieldvalue}
          onChange={props.handler}
        />
      </div>
    </div>
  );
};

const EmailField = props => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={props.fieldname} className="control-label">
          {props.title}
        </label>
        <input
          className="form-control"
          id={props.fieldname}
          type="email"
          placeholder={props.placeholdertext}
          name={props.fieldname}
          value={props.fieldvalue}
          onChange={props.handler}
        />
      </div>
    </div>
  );
};

const SelectField = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.fieldname}> {props.title} </label>
      <select
        className="form-control"
        name={props.fieldname}
        value={props.fieldvalue}
        onChange={props.handler}
      >
        <option value="" disabled>
          {props.placeholdertext}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export { TextField, EmailField, SelectField, PhoneField };
