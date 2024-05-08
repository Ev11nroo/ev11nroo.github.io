let isInput = true

function send(num) {
    if (num == 1) {
        document.getElementById('output').innerHTML = document.getElementById('input').value;
        return;
    }
    document.getElementById('output').innerHTML = null;
}

function change() {
    if (isInput) {
        isInput = false
        document.getElementById('input').outerHTML = "<textarea id='input' rows=15 cols=75></textarea>";
        document.getElementById('change').textContent = "change to input"
        return;
    }
    isInput = true
    document.getElementById('change').textContent = "change to textarea"
    document.getElementById('input').outerHTML = "<input type='text' id='input'>"
}