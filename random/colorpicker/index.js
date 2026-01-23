function setColorValues(event) {
    const value = String(event.target.value);
    const hexElement = document.getElementById("hex");

    const hexValue = value.replace("#", "");

    hexElement.innerHTML = `hex: ${hexValue}`
}

addEventListener("DOMContentLoaded", () => {
    document.getElementById("color").addEventListener("change", setColorValues);
});