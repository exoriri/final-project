/** Замыкаем все переменные в аннонимной функции, 
 * чтобы эти переменные не конлфиктовали с остальными */
(() => {
    const projectButtons = document.querySelectorAll('.projects__item');
    const projectInfoNode = document.getElementById('project-info');
    const projectsNode = document.getElementById('project-grid');
    //Элементы, которые показываются только когда выбран проект
    const invisibleElements = document.querySelectorAll('.specific-project-elem');

    const getHTMLProjectsGrid = (src) => {
        let result = '';
        //генерируем 6 картинок с найденным src
        for (let i = 0; i < 6; i++) {
            result += `<img class="project-centered-elem" src="${src}" alt="project photo">`;
        }
        return result;
    };

    const renderProjectsList = () => {
        const backBtn = document.getElementById('back-btn');

        //Удаляем обработчик с кнопки ""Назад к списку проектов""
        backBtn.removeEventListener('click', renderProjectsList);
        //Скрываем кнопку "Назад к списку проектов"
        invisibleElements.forEach(elem => elem.classList.add('hidden'));
        //Очищаем иноформацию о проектое
        projectInfoNode.innerHTML = '';

        //Возвращаем начальный список проектов
        projectsNode.innerHTML = `
        <button class="projects__item">
        <img src="../assets/images/portfolio/project-1.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Сад Орехово</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
      <button class="projects__item">
        <img src="../assets/images/portfolio/project-2.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Проект Охта</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
      <button class="projects__item">
        <img src="../assets/images/portfolio/project-3.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Сад Токсово</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
      <button class="projects__item">
        <img src="../assets/images/portfolio/project-1.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Проект Лахта</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
      <button class="projects__item">
        <img src="../assets/images/portfolio/project-5.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Парк Сосоново</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
      <button class="projects__item">
        <img src="../assets/images/portfolio/project-6.png" alt="project photo">
        <div class="projects__text">
          <h3 class="projects__name">Сад хвойный</h3>
          <p class="projects__stat-text">Площадь: 35 соток</p>
          <p class="projects__stat-text">Реализация: 2020-2021</p>
          <p class="projects__stat-text">Стоимость: 780 000₽</p>
        </div>
      </button>
        `;

        //Получаем кнопки с проектами и вешаем обраточик событий для выбора проекта
        const projectButtons = document.querySelectorAll('.projects__item');
        projectButtons.forEach(btn => {btn.addEventListener('click', selectProject)})
    };

    const selectProject = (e) => {
        const projectNode = e.currentTarget;

        //Выбираем картинку проекта
        const projectImage = projectNode.getElementsByTagName('img')[0];
        // Информация проекта
        const textInfoNode = projectNode.getElementsByClassName('projects__text')[0];

        //Вставляем html-строку конкретного проекта
        projectInfoNode.insertAdjacentHTML('beforeend', textInfoNode.innerHTML);
        projectsNode.innerHTML = getHTMLProjectsGrid(projectImage.src);

        invisibleElements.forEach(elem => elem.classList.remove('hidden'));

        //Находим кнопку "Назад к списку проектов" и вешаем обрабочик для скрытия проекта
        const backBtn = document.getElementById('back-btn');
        backBtn.addEventListener('click', renderProjectsList);
    };

    //вешаем обраточик событий для показа проекта по нажатию
    projectButtons.forEach(btn => {btn.addEventListener('click', selectProject)})
})();