function turnPartialHexToDecimal(partHex) {
    const hex = `0x${partHex}`;
    console.log(hex);
    console.log(Number(hex));

    return Number(hex);
}

function setColorValues(event) {
    const value = String(event.target.value);
    const hexElement = document.getElementById("hex");
    const rgbElement = document.getElementById("rgb");

    const hexValue = value.replace("#", "");
    const hexSplit = hexValue.match(/.{1,2}/g); // stack overflow or something regex
    const rgbValue = `${turnPartialHexToDecimal(hexSplit[0])}, ${turnPartialHexToDecimal(hexSplit[1])}, ${turnPartialHexToDecimal(hexSplit[2])}`;

    hexElement.innerHTML = `hex: ${hexValue}`;
    rgbElement.innerHTML = `rgb: ${rgbValue}`;
}

addEventListener("DOMContentLoaded", () => {
    document.getElementById("color").addEventListener("change", setColorValues);
});