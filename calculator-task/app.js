
function display(value) {
    const box = document.getElementById('box');
    
    if (box.value === '0') {
        box.value = value;
    } else {
        box.value += value;
    }
}

function clr() {
    document.getElementById('box').value = '0';
}

function del() {
    const box = document.getElementById('box');
    box.value = box.value.slice(0, -1) || '0';
}

function calculate() {
    const box = document.getElementById('box');
    try {
        box.value = eval(box.value.replace(/[^-()\d/*+.]/g, ''));
    } catch (error) {
        box.value = 'Error';
    }
}
