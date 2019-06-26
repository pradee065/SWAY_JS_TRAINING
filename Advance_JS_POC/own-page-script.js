// DOM traversal examples here:

var logoClicked = false,
  menuClicked = false;

function myLogo() {
  logoClicked = true;
  let newLogo = document.createElement('div');
  newLogo.className = 'my-logo';
  newLogo.innerHTML = "<p>LOGO</p>";
  let oldLogo = document.getElementById('first-logo');
  oldLogo.parentNode.replaceChild(newLogo, oldLogo);

  if (menuClicked && logoClicked) {
    let elem = document.getElementsByTagName('h2')
    elem[0].parentNode.removeChild(elem[0]);
  }
}


function myMenu() {
  menuClicked = true;
  let ul = document.createElement('ul');
  ul.className = 'menu-list';
  let oldMenu = document.getElementById('old-menu');
  oldMenu.parentNode.replaceChild(ul, oldMenu);
  while (true) {
    let data = prompt("enter the number of menu item");
    if (!data) {
      break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);

  }
  if (menuClicked && logoClicked) {
    let elem = document.getElementsByTagName('h2')
    elem[0].parentNode.removeChild(elem[0]);
  }

}


// Event Handler in js - Change bg image

function changeBg() {
  let myBanner = document.querySelector('.home-banner');
  setTimeout(() => {
    myBanner.style.background = "url(images/patrick-tomasso.jpeg) no-repeat left top";
    setTimeout(() => {
      myBanner.style.background = "url(images/office-staff-typing.jpg) no-repeat left top";
    }, 500);
  }, 1000);

}

// Modal popup events on same event different functions here:
// Multiple calls to addEventListener allow to add multiple handlers, like this:

function shivam1() {
  alert('About Me - I am crazy about fitness');
};

function shivam2() {
  alert('And i am very happy to lead this team');
}
shivam.onmouseover = () => alert("I'm a cool guy!!!");
shivam.addEventListener("mouseover", shivam1); // Thanks!
shivam.addEventListener("mouseover", shivam2); // Thanks again!

function darshan1() {
  alert('About Me - I am little tensed with my work');
};

function darshan2() {
  alert('And i am very happy to be part of this team');
}
darshan.onmouseover = () => alert("i'm a awesome buddy");
darshan.addEventListener("mouseover", darshan1); // Thanks!
darshan.addEventListener("mouseover", darshan2); // Thanks again!

function imran1() {
  alert('About Me - I am always thinking about my wife');
};

function imran2() {
  alert('And i am very happy to be part of this team as well');
}
imran.onmouseover = () => alert("i'm a happiest family guy");
imran.addEventListener("mouseover", imran1); // Thanks!
imran.addEventListener("mouseover", imran2); // Thanks again!

function sayeda1() {
  alert('About Me - I like to travel around a world');
};

function sayeda2() {
  alert('And i am very happy to be part of this team as well');
}
sayeda.onmouseover = () => alert("Always smile on face");
sayeda.addEventListener("mouseover", sayeda1); // Thanks!
sayeda.addEventListener("mouseover", sayeda2); // Thanks again!


// Team members funciton get's end here


//Softway expenses snippets here


var verticalExpenses = function (study = 0, outings = 0, snacks =0) {
  this.study = study;
  this.outings = outings;
  this.snacks = snacks;
  this.calculateSum = function () {
    return this.study + this.outings + this.snacks;
  }
  this.calculateStudySum = function(){
    return this.study;
  }
}
function onSubmitForm(e, formClass) {
  e.preventDefault();
  let expense1 = parseFloat(document.querySelector('#' + formClass + ' .study').value);
  let expense2 = parseFloat(document.querySelector('#' + formClass + ' .outings').value);
  let expense3 = parseFloat(document.querySelector('#' + formClass + ' .meetings').value);
  let stdyExpenses = (isNaN(expense1) ? 0 : expense1);
  let outingExpenses = (isNaN(expense2) ? 0 : expense2);
  let snacksExpenses = (isNaN(expense3) ? 0 : expense3);
  let vertical = new verticalExpenses(stdyExpenses, outingExpenses, snacksExpenses);
  //let verticalstudy = new verticalExpenses(stdyExpenses, outingExpenses, snacksExpenses);
  let sum = vertical.calculateSum();
  //var studysum = verticalstudy.calculateStudySum(); 
  document.querySelector('#' + formClass + ' .submit-btn').innerHTML = sum;
  document.querySelector('.total-study-expense').innerHTML = studysum;
}

function studySum(formClass){
  var expense1 = parseFloat(document.querySelector('#' + formClass + ' .study').value);
  var stdyExpenses = (isNaN(expense1) ? 0 : expense1);
  alert(expense1);
  var verticalstudy = new verticalExpenses(stdyExpenses);
  var studysum = verticalstudy.calculateStudySum();
  document.querySelector('.total-study-expense').innerHTML = studysum;

}

// function getMfGInstance(e) {
//   e.preventDefault();
//   var expense1 = parseFloat(document.querySelector('#mfgstudy').value);
//   var expense2 = parseFloat(document.querySelector('#mfgoutings').value);
//   var expense3 = parseFloat(document.querySelector('#mfgmeetings').value);
//   var stdyExpenses = (isNaN(expense1) ? 0 : expense1);
//   var outingExpenses = (isNaN(expense2) ? 0 : expense2);
//   var snacksExpenses = (isNaN(expense3) ? 0 : expense3);
//   var mfg = new verticalExpenses(stdyExpenses, outingExpenses, snacksExpenses);
//   // var sum = mfg.mfgexpenses();
//   // document.querySelector('.mfg').innerHTML = sum;
// }

// function getPRFSNLInstance(e) {
//   e.preventDefault();
//   var expense1 = parseFloat(document.querySelector('#prfsnlstudy').value);
//   var expense2 = parseFloat(document.querySelector('#prfsnloutings').value);
//   var expense3 = parseFloat(document.querySelector('#prfsnlmeetings').value);
//   var stdyExpenses = (isNaN(expense1) ? 0 : expense1);
//   var outingExpenses = (isNaN(expense2) ? 0 : expense2);
//   var snacksExpenses = (isNaN(expense3) ? 0 : expense3);
//   var prfsnl = new verticalExpenses(stdyExpenses, outingExpenses, snacksExpenses);
//   prfsnl.prfsnlexpenses();
//   prfsnl.mfgexpenses();
// }

// verticalExpenses.prototype.ongexpenses = function () {
//   let sum = 0;
//   sum = this.study + this.outings + this.snacks;
//   document.querySelector('.ong-sum').innerHTML = sum;
// }

// verticalExpenses.prototype.mfgexpenses = function () {
//   let sum = 0;
//   sum = this.study + this.outings + this.snacks;
//   return sum;
// }

// verticalExpenses.prototype.prfsnlexpenses = function () {
//   let sum = 0;
//   sum = this.study + this.outings + this.snacks;
//   document.querySelector('.prfsnl').innerHTML = sum;
// }