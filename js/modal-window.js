"use strict"
const popupEl = document.querySelector('.popup_js');
const buttonBuy = document.querySelectorAll('.btn_buy_js');
const closeBtn = document.querySelectorAll('.close_popup_js');


/* вызов и удаление, попап*/
buttonBuy.forEach(button => {
button.addEventListener('click', function(e) {
    e.preventDefault();
    popupEl.classList.add(POPUP_CLASS_ACTIVE);
});
});
closeBtn.forEach(close =>{
    close.addEventListener('click', () => {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    })
});


popupEl.onclick = function (e) {
    if (e.target == popupEl) {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    } 
};
document.onkeydown = function (e) {
    if (e.keyCode === 27) {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    }
}
/* Отправка формы и валидация*/
const formEl = document.getElementById('f-1');
const inputUser = document.querySelectorAll('.input_user');
const POPUP_CLASS_ACTIVE = 'popup_active';

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    alert('Ваша заявка оформлена! Мы перезвоним вам в ближайшее время!');
    popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    formEl.reset();
});
