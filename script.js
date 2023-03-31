let error = document.querySelector('.debug');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let button = document.querySelector('.btn');

function check(event) {
    event.preventDefault();
    if (email.value == 'composter@mail.com' && password.value == '111') {
        error.innerHTML = 'Верно';
        setTimeout(function(){
            window.location.href = 'weather.html';
          }, 5 * 1000);
    } else {
        error.innerHTML = 'Ошибка урод!!!';
    }
    
}

// function check(event) {
//     event.preventDefault();
//     if (email.value == 'composter@mail.com' && password.value == '111') {
//         error.innerHTML = 'Верно';
//         setTimeout(function(){
//             window.location.href = 'https://www.google.com/';
//           }, 5 * 1);
//     } else {
//         error.innerHTML = 'Ошибка урод!!!';
//     }
    
// }

button.addEventListener('click', check);


