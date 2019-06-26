var fruitsPerPage = 4;
var numberOfPages = 0;

function addMango() {
    fruitsCheck()//To check no fruits per page
    if (fruitsCheck()) {
        return;
    }
    var mangocontainer = document.querySelector('.container');
    var mangodiv = document.createElement('div');
    mangocontainer.appendChild(mangodiv);
    var mangoname = mangodiv.setAttribute('class', 'page');
    var mangofig = document.createElement('figure');
    mangodiv.appendChild(mangofig);
    var mangoimage = document.createElement('img');
    mangofig.appendChild(mangoimage);
    mangoimage.setAttribute('src', 'https://purepng.com/public/uploads/large/purepng.com-mangomangofruithalvedfrontalfullsweetfresh-481521564634qp959.png');
    var mangocaption = document.createElement('figcaption');
    mangofig.appendChild(mangocaption);
    mangocaption.textContent = 'Mango Fruit';
    fruitsCheck();
}

function addApple() {
    fruitsCheck()  //To check no fruits per page
    if (fruitsCheck()) {
        fruitTab()
        return;
    }
    var applecontainer = document.querySelector('.container');
    var applediv = document.createElement('div');
    applecontainer.appendChild(applediv);
    var applename = applediv.setAttribute('class', 'page');
    var applefig = document.createElement('figure');
    applediv.appendChild(applefig);
    var appleimage = document.createElement('img');
    applefig.appendChild(appleimage);
    appleimage.setAttribute('src', 'http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png');
    var applecaption = document.createElement('figcaption')
    applefig.appendChild(applecaption);
    applecaption.textContent = 'Apple';

}

function fruitsCheck() {
    var fruits = document.querySelectorAll('.page');
    if (fruits.length > fruitsPerPage) {
        return true;
    }
}

function fruitTab() {
    var pagination = document.querySelector('.pagination');


    pagination.addEventListener('click', function (e) {
        console.log(e.target.tagName);
        if (e.target.tagName = 'A') { //Event delegation here 
            e.preventDefault();
            var item = e.target;
            var els = document.querySelectorAll('.active')
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active')
            }
            item.classList.add("active");
        }
    });
}