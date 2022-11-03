/* Кнопка НАВЕРХ */

const backToBtn = document.querySelector('.back_to_top');
const targetBackTop = document.getElementById('back_top_js');

window.onscroll = function() {
    if (window.pageYOffset > 800) {
        backToBtn.classList.add('back_to_top_show');
    } else { backToBtn.classList.remove('back_to_top_show');}
};

backToBtn.onclick = function(e) {
    e.preventDefault();
    targetBackTop.scrollIntoView();
};