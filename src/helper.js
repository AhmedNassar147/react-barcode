import JsBarcode from 'jsbarcode';

export const createBarcode = value => {
  const canvas = document.getElementById('canv');
  if (value === undefined || value === "") {
    return;
  } else {
    JsBarcode(canvas, value, {
      format: "CODE128",
      width: 1,
      background: "#dddddd",
      displayValue: false,
      height: 30
    })
  }
}