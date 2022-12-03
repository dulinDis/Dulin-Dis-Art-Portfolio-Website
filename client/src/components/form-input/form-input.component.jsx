import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    name,
    type,
    onChange,
    required,
    pattern,
    errorMessage,
    className,
    ...inputProps
  } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-field">
      {type === "textarea" ? (
        <textarea
          {...inputProps}
          name={name}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          pattern={pattern}
          className={`form-control textfield ${className}`}
          cols="20"
          rows="5"
          placeholder={`${name}`}
        />
      ) : (
        <input
          {...inputProps}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          pattern={pattern}
          className={`form-control ${className}`}
          cols={`${type === "textarea" ? "20 " : ""}`}
          rows={`${type === "textarea" ? "5 " : ""}`}
          placeholder={`${name}`}
        />
      )}
      <span className="focus-border"></span>
      <span className="error-message">
        {errorMessage ? `${errorMessage}` : "."}
      </span>
    </div>
  );
};

export default FormInput;
