import React from 'react';

const Button = (props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;