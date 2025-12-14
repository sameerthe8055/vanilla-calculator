
//    console.log( document.getElementsByClassName('input'));
let display = document.getElementById('display');
let resultShown = 0;

function appendExp(key) {
    if (resultShown){
            resultShown = 0;
            if (key>='0' && key <= '9'){display.value = "";}
        }
    display.value += key ;

}

function backspace(){
    if (!display.value || resultShown == 1 ){return;}
    if (resultShown == 2) {display.value = ""; return;}
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try {
        display.value = eval(display.value);
        resultShown = 1;
    } catch (error) {
        display.value = "Enter valid expression";
        resultShown = 2;
    }
}

document.addEventListener('keydown',(event)=>{
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
    else if (key == 'Enter') {
        calculate()
    }
    else if(key == 'Backspace'){
        backspace()
    }
    else if(key == 'Delete'){
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
    if (!display.value || resultShown == 1 ){
        return;
    } 
    if (resultShown == 2){
        display.value = "";
        return;
    }
    else{
        calculate()
        return;
    }
    
});

[...document.getElementsByClassName('numip')].forEach(el => {
    console.log(el);
    el.addEventListener('click', (e) => {
        
        appendExp( e.target.innerText );
    })

});