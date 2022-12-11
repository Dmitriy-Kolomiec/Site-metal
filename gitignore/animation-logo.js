// // Обучение, анимация с помощью JS

// const logo = document.querySelector('.logo-js')

// let isPaused = false; // остановка
// let degrees = 0; // Текущие количество градусов, на которое прокрутился элемент

// function animate() {
//     if (!isPaused) {
//         degrees++;
//         logo.style.transform = `rotate(${degrees}deg)`;

//         requestAnimationFrame(animate);
//     }
// };

// animate();

// logo.addEventListener('mouseenter', function() {
//     isPaused = true;
// });
// logo.addEventListener('mouseleave', function() {
//     isPaused = false;
//     animate();
// }); 

// WEB Animations API

const logo = document.querySelector('.logo-js');

const animation = logo.animate(
    [
        {transform: 'translateX(0)'}, // Начальное положение
        {transform: 'translate(70px)'},
        {transform: 'translateX(0)'}  // финишное положение
    ],
    {
    duration: 5000, // количество милисекунд на итерацию
    iterations: Infinity // количество итераций.
    }
);

logo.addEventListener('mouseenter', function() {
    animation.pause();
});
logo.addEventListener('mouseleave', function() {
    animation.play();
});