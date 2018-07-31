import React from 'react';

export default ({ inputStyle, onChangeInput, type, id }) => (
  <input
    type={type}
    style={inputStyle}
    id={id}
    onChange={onChangeInput}
  />
)