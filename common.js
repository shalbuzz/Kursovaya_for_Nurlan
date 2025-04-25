// Функция для инициализации мобильного меню
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// Функция для инициализации корзины
function initCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            
            // Анимация добавления в корзину
            this.innerHTML = '<i class="fas fa-check"></i><span>Добавлено</span>';
            this.style.backgroundColor = '#27ae60';
            
            // Увеличиваем счетчик корзины
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = parseInt(cartCount.textContent) + 1;
            
            // Возвращаем исходный текст кнопки через 2 секунды
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i><span>В корзину</span>';
                this.style.backgroundColor = '';
            }, 2000);
            
            // Показываем уведомление
            alert(`Товар "${productTitle}" добавлен в корзину`);
        });
    });
}

// Функция для инициализации формы подписки на рассылку
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            
            if (emailInput.value) {
                alert(`Спасибо! Вы успешно подписались на нашу рассылку с адресом: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initCart();
    initNewsletterForm();
});