data = '[{"blue" : "is ok", "red" : "is my fave color"}]';

function load(text) {
    var menu = JSON.parse(text);
    let menuString = '';
    for (let i = 0; i < menu.length; i++) {
        let menuItem = menu[i];
        menuString += '<li><a href="' + menuItem.adresas + '">' + menuItem.pavadinimas + '</a></li>';
    }
    document.querySelector('header> ul').innerHTML = menuString;
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON(load);

$(function () {
    $('header ul li a').click(function (e){
        e.preventDefault();

        let elementas = $(this);
        let adresas = elementas.attr('href');
        $('main').load(adresas);
    });

});
