import React, { Component } from 'react';
import { RenderInput } from '../../components';
import { createBarcode } from '../../helper';

class SingleBarcode extends Component {
  state = {
    inpValue: undefined,
  }

  updateState = (prop, value) => this.setState({ [prop]: value });

  onChangeInput = ({ target: { value } }) => this.updateState('inpValue', value);

  renderChildren = () => {
    const { onChangeInput, state } = this;
    const { inpValue } = state;

    return (
      <div style={container} >
        <p children="generate barcodes" style={paragraph} />
        <div style={inputContainer} >
          <RenderInput inputStyle={inputStyle} onChangeInput={onChangeInput} />
        </div>
        <div style={barcodeStyle} >
          {createBarcode(inpValue)}
          <canvas id="canv" />
        </div>
      </div>
    )
  }

  render() {
    return this.renderChildren();
  }
}

const container = {
  width: '80%',
  minHeight: '400px',
  margin: '20px auto',
  boxShadow: '1px 1px 2px 2px grey',
  textAlign: 'center'
}
const paragraph = {
  fontSize: 50,
  color: 'blue',
  marginTop: '10px'
}

const inputContainer = {
  width: '70%',
  margin: 'auto',
  padding: '20px'
}
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '2px',
}

const barcodeStyle = {
  margin: '10px auto',
  textAlign: 'center'
}

export default SingleBarcode;
