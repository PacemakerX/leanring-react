import React from "react";

export default function Alert(props) {
  const lowercaseFirstCharacter = () => {
    return props.alert.type.charAt(0).toLowerCase() + props.alert.type.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${lowercaseFirstCharacter()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type} </strong>
        {props.alert.msg}
        <button
          type="button"
          className="btn"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
