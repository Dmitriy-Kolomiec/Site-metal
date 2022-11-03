const country = [46.14928254793879,42.268274983252056];
const office = [45.0158453190553,39.06788968650813];
const production =[44.97954386943383,38.94785041268918];

function unit() {
    let mapOffice = new ymaps.Map('map-office-js', { /* подгружаем карту офиса*/
        center: office,
        zoom: 17
    });
    let placemark = new ymaps.Placemark(office, {}, { /* Приваеваем метку*/
});
    let map = new ymaps.Map('map-country', { /* подгружаем карту юга страны*/
        center: country,
        zoom: 6
    });
map.controls.remove('searchControl');
map.controls.remove('trafficControl');
map.geoObjects.add(placemark);
};
ymaps.ready(unit);
