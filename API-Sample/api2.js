const app = document.getElementById('root');
console.log(app);
const logo = document.createElement('img');
logo.src = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.append(logo);
app.append(container);

    //alert('working')
    var react = new XMLHttpRequest();

    react.open('GET', 'https://ghibliapi.herokuapp.com/films', true );
    react.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data);
        data.forEach(movie => {
            var card = document.createElement('div');
            card.setAttribute('class', 'card');
            container.append(card);
            var h1 = document.createElement('h1');
            card.append(h1);
            h1.textContent = movie.title;
            var h2 = document.createElement('h2');
            card.append(h2);
            h2.textContent = movie.description;
        });

    }
    react.send();
   
