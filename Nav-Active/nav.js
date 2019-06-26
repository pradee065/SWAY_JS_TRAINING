var crumb = document.querySelectorAll('nav li');
console.log(crumb);
for( i=0; i<crumb.length; i++){
    crumb[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].classList.remove('active');
          }
        this.classList.add('active');
    });
}
