function formsubmit(e) {
 e.preventDefault();
 
}

function logIn(){
    var react = new XMLHttpRequest();
    react.open('POST', 'http://localhost:3000/login', true);
    var username = document.querySelector('.username').value;
    var pass = document.querySelector('.password').value;
    var personDetails = {
        username: username,
        password: pass
    }
    var myJSON = JSON.stringify(personDetails);
    react.send(myJSON);
}
