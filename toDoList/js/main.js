var btnAddList = document.getElementById('addListButton');
var inputTxtTask = document.getElementById('inputTxt');
var btnRemoveList = document.getElementById('removeListButton');
var ulListTask = document.getElementById('ulList');
var taskCount = 0;

btnAddList.addEventListener('click', addItem);
btnRemoveList.addEventListener('click', removeAllItems);

inputTxtTask.addEventListener('keyup', function(event) {
    event.preventDefault();
    if(event.keyCode === 13){
        addItem();
    }
});//добавление элемента li по нажатию на Enter

function addItem() {
    var taskValue = inputTxtTask.value;

    if(taskValue.length === 0){
        return;
    }//проверка пустого ввода в input

    taskCount++;

    //добавление li в элемент ul
    var newLi = document.createElement('li');
    newLi.innerHTML = taskValue + '<br/>';

    newLi.onmouseover = function () {
        newLi.style.cursor = 'pointer';
    }

    styleLi(newLi);

    if(taskCount%3 === 0){
        var randomColorRgb = generateColor1();
        newLi.style.color = randomColorRgb + '1' + ')';
        newLi.style.background = randomColorRgb + '0.2' + ')';
    }

    newLi.addEventListener('click', function () {
        newLi.style.textDecoration = newLi.style.textDecoration === 'line-through'?'none':'line-through';
    });
    //end добавление li в элемент ul

    //добавление даты в элемент li
    var newDate = document.createElement('span');
    newDate.innerHTML = date();

    styleDate(newDate);

    newLi.appendChild(newDate);
    ulListTask.insertBefore(newLi, ulListTask.firstChild);
    //end добавление даты в элемент li

    inputTxtTask.value = null;

    unfade(newLi);
}

function styleDate(date) {
    date.style.cssText = 'font-size:10px; float: right;';
}//стиль элемента даты

function styleLi(li) {
    li.style.cssText = 'display: inline-block; width: 100%; word-break:break-all; ' +
        'background-color: white; margin: 3px 0; border-radius: 2px; padding: 10px 10px; box-sizing: border-box;' +
        ' box-shadow: 0 2px 4px rgba(0, 0, 0, .2); font-family: Snowstorm_Light, Georgia, serif; opacity: 0;';
}//стиль элемента списка Li

function removeAllItems(){
    if(ulListTask.innerHTML != ""){
        ulListTask.innerHTML = "";
        taskCount = 0;
    }
}//очищение списка

function generateColor1() {
    var randomRed = Math.floor(Math.random()*(200));
    var randomGreen = Math.floor(Math.random()*(200));
    var randomBlue = Math.floor(Math.random()*(200));
    var randomColor = 'rgba(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ', ';
    return randomColor;
}//генерирование рандомного цвета

function unfade(element) {
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}//анимация появления элемента li

function date() {
    var date = new Date();

    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return date.toLocaleString('ru', options);
}//форматирование даты
