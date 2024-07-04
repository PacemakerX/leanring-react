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
          className="btn"           // this is new, i have to look it on stack overflow btm-close , will display a X
          data-bs-dismiss="alert" // this is new, i have to look it on stack overflow data-bs=dismiss
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
