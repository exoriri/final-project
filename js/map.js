// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.94214084050809, 30.28370852698631],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<img src="../assets/icons/contacts/marker.svg">'
),

  marker = new ymaps.Placemark([59.94214084050809, 30.28370852698631], {
    hintContent: 'Собственный значок метки с контентом',
    balloonContent: 'А эта — новогодняя',
    iconContent: 'Санкт-Петербург, 4-ая линия В.О. д. 15, оф. 5'
}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'images/ball.png',
    // Размеры метки.
    iconImageSize: [24, 24],
    // Смещение левого верхнего угла иконки относительно,
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
});

  myMap.geoObjects
        .add(marker);
}
