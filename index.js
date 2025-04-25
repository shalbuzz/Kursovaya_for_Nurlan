// Функция для инициализации главной страницы
function initIndexPage() {
    // Инициализация кнопок фильтрации продуктов
    initProductFilter();
    
    // Инициализация кнопок навигации
    initNavigationButtons();
}

// Функция для инициализации фильтрации продуктов
function initProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    
    // Добавляем обработчики событий для кнопок фильтрации
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс на нажатую кнопку
            button.classList.add('active');
            
            // Получаем категорию из атрибута data-category
            const category = button.getAttribute('data-category');
            
            // Фильтруем продукты
            filterProducts(category, products);
        });
    });
}

// Функция фильтрации продуктов
function filterProducts(category, products) {
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Функция для инициализации кнопок навигации
function initNavigationButtons() {
    // Кнопка "Смотреть каталог"
    const viewCatalogBtn = document.getElementById('viewCatalogBtn');
    if (viewCatalogBtn) {
        viewCatalogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // В многостраничном сайте здесь будет переход на страницу каталога
            alert('Переход на страницу каталога');
        });
    }
    
    // Кнопка "Смотреть все продукты"
    const viewAllProductsBtn = document.getElementById('viewAllProductsBtn');
    if (viewAllProductsBtn) {
        viewAllProductsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // В многостраничном сайте здесь будет переход на страницу каталога
            alert('Переход на страницу каталога');
        });
    }
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initIndexPage);