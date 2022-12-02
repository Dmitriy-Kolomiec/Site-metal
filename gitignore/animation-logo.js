// Обучение, анимация с помощью JS

const logo = document.querySelector('.logo-js')

let isPaused = false; // остановка
let degrees = 0; // Текущие количество градусов, на которое прокрутился элемент

function animate() {
    if (!isPaused) {
        degrees++;
        logo.style.transform = `rotate(${degrees}deg)`;

        requestAnimationFrame(animate);
    }
};

animate();

logo.addEventListener('mouseenter', function() {
    isPaused = true;
});
logo.addEventListener('mouseleave', function() {
    isPaused = false;
    animate();
});  

//проверка


