import React from 'react';

const Input = (props) => {
  return (
    <input type="text" className="form-control" id="search" aria-describedby="Search" placeholder="Search" onChange={props.onChangeHandle} />
  );
};

export default Input;