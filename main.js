// ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД ПОШУК БЛЮД
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('title-input');
    const suggestions = document.getElementById('suggestions');

    const dishes = [
        { name: "Бульйон", id: "bulyon" },
        { name: "Стейк", id: "meat" },
        { name: "Салат", id: "salad" },
        { name: "Паста", id: "pasta" },
        { name: "Паста з м’ясом", id: "pasta_meat" },
        { name: "Паста з овочами", id: "pasta_vegetables" }
    ];

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        suggestions.innerHTML = '';

        if (query) {
            const filteredDishes = dishes.filter(dish =>
                dish.name.toLowerCase().includes(query)
            );

            filteredDishes.forEach(dish => {
                const li = document.createElement('li');
                li.textContent = dish.name;
                li.dataset.id = dish.id;
                suggestions.appendChild(li);
            });
        }
    });

    // Обработчик клика на подсказку
    suggestions.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const dishId = event.target.dataset.id;
            const targetSection = document.querySelector(`#${dishId}`);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                suggestions.innerHTML = ''; // Очистить подсказки
                input.value = ''; // Очистить инпут
            }
        }
    });
});

//      СКРОЛ МЕНЮ  СКРОЛ МЕНЮ  СКРОЛ МЕНЮ  СКРОЛ МЕНЮ  СКРОЛ МЕНЮ

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { selector: '.list__item:nth-child(1)', target: '.title-container' }, // Головна
        { selector: '.list__item:nth-child(2)', target: '.menu__title-lead' }, // Меню
        { selector: '.list__item:nth-child(3)', target: '.chefs' }, // Контакти
        { selector: '.list__item:nth-child(4)', target: '.dishes__title' } // Ресторани
    ];

    menuItems.forEach(item => {
        const link = document.querySelector(item.selector);
        const targetSection = document.querySelector(item.target);

        if (link && targetSection) {
            link.addEventListener('click', () => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
});
