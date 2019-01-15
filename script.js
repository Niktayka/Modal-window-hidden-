window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        });


        close.addEventListener('click', function(){
            overlay.classList.display = "none";
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

});

// Второе задание

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);