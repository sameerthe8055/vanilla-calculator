
//    console.log( document.getElementsByClassName('input'));
let display = document.getElementById('display');
let resultShown = true;
let errorshown = false;

function appendExp(key) {
    if (resultShown) {
        resultShown = false;
        if ((key >= '0' && key <= '9' ) || display.value == 'Infinity'){
             display.value = ""; 
            }
    }
    if (errorshown){
        errorshown = false;
        display.value = ""; 
    }
    display.value += key;

}

function backspace() {
    if (!display.value ) return; 
    else if (errorshown) {
        errorshown = false;
        display.value = false;
    }
    else if (resultShown){
        resultShown = false;
        display.value = ""
    }
    else{
        display.value = display.value.slice(0, -1);
    }
        
}

function calculate() {
    if (!display.value || resultShown  ){
        return;
    } 
    else if (errorshown){
        return;
    }

    try {
        display.value = eval(display.value);
        resultShown = true;
    } catch (error) {
        display.value = "Enter valid expression";
        errorshown = true;
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (
        (key >= '0' && key <= '9') ||
        key == '+' ||
        key == '-' ||
        key == '*' ||
        key == '/'
    ) {
        appendExp(key);
    }
    else if (key == 'Enter' || key == '=') {
        calculate()
    }
    else if (key == 'Backspace') {
        backspace()
    }
    else if (key == 'Delete') {
        display.value = ""
    }
    else {
        return;
    }
});

document.getElementById('clear').addEventListener('click', (() => {
    display.value = "";
}));

document.getElementById('backspace').addEventListener('click', backspace);

document.getElementById('calculate').addEventListener('click', () => {
    calculate();
    return;


});

[...document.getElementsByClassName('numip')].forEach(el => {
    console.log(el);
    el.addEventListener('click', (e) => {

        appendExp(e.target.innerText);
    })

});