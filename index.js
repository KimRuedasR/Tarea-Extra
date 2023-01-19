// Primer ejercicio
var btnObjects = document.getElementById('objects');
btnObjects.addEventListener('click', function() {
    // Se le pide el valor al usuario
    var n = prompt('Ingresa un valor');
    for (let i = 0; i < n; i++) {
        var circles = document.createElement('div');
        circles.classList.add('circle');
        circles.innerText = i+1;
        // Se agregan a un div para que no queden al final de todo
        document.getElementById('circulos').appendChild(circles);
    }
});

// Segundo ejercicio
var btnDivs = document.getElementById('divs');
btnDivs.addEventListener('click', function(){
    var divs = Array.from(document.querySelectorAll('div.box'));
    divs.forEach(d => {
        var width = d.style.width.slice(0, -2);
        var color = d.style.background;
        // Agrero operadores para eliminar a los mayores a 50 Y verdes O a los negros
        if (width > 50 && color == 'green' || color == 'black') {
            document.body.removeChild(d);
        }
    });
});

// Tercer ejercicio
var btnClicks = document.getElementById('clicks');
var count = 0;
contador.innerText = count;
btnClicks.addEventListener('click', function () {
    count++;
    if (count>=20) {
        count=0;
        // Alerta 
        alert('El contador ha terminado');
    }
    contador.innerText = count;
});
// Boton para resetear
var btnClicksReset = document.getElementById('clicksReset');
btnClicksReset.addEventListener('click', function () {
    count=0;
    contador.innerText = count;
});

// Cuarto ejercicio
var select = document.getElementsByTagName('select')[0];
select.addEventListener('click', function(){
    var colorValue = select.value;
    document.getElementById('canva').style.background = colorValue;
});

// Quinto ejercicio
var liElements = document.getElementsByClassName('game');
liElements = Array.from(liElements);
var n = 0;
liElements.forEach((element) => {
    element.addEventListener('click', function (event) {
        var lengthText = event.target.innerText.length;
        if (lengthText >= 10) {
            event.target.style.fontStyle = 'italic';
        }
        if (lengthText >= 15) {
            event.target.style.fontWeight = 'bold';
        }
        if (lengthText >= 20 && lengthText < 25) {
            var liElements2 = document.getElementsByClassName('game2')[n];
            var element = event.target.innerText;
            liElements2.append(element);
            n++;
        }
    })
});