const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.append(logo);
app.append(container);

var react = new XMLHttpRequest();

react.open('GET', 'https://ghibliapi.herokuapp.com/films', true );

react.onload = function(){
    var data = JSON.parse(this.response) //Mainly recieved JSON data is in string to convert that string to javascript objetc we use parse.
    if(react.status >= 200 && react.status < 400){
    data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        container.appendChild(card);
        const title = document.createElement('h1');
        card.appendChild(title);
        title.textContent = movie.title;
        const p = document.createElement('p');
        card.appendChild(p);
        const director = document.createElement('div');
        director.setAttribute('class','director');
        card.appendChild(director);
        director.textContent = movie.director;
        const producer = document.createElement('div');
        producer.setAttribute('class', 'producer');
        card.appendChild(producer);
        producer.textContent = movie.producer;
        console.log(movie);
        p.textContent = movie.description.substring(0, 300);
    });
    }
    else {
        const errorMessage = document.createElement('marquee');
errorMessage.textContent = `it's not working!`
app.appendChild(errorMessage)
    }
}
react.send();



