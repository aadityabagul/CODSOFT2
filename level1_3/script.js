let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendCharacter(character) {
    display.value += character;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
