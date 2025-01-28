function handleLogin(event) {
    event.preventDefault();

    // Сбрасываем предыдущие ошибки
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Простая валидация
    let isValid = true;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('emailError').textContent = 'Введите корректный email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Пароль должен содержать минимум 8 символов';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Здесь будет отправка данных на сервер
        console.log('Отправка формы:', { email, password });

        // Имитация отправки данных
        const button = document.querySelector('.button');
        button.disabled = true;
        button.textContent = 'Вход...';

        setTimeout(() => {
            // В реальном приложении здесь будет проверка ответа от сервера
            window.location.href = '/dashboard';
        }, 1500);
    }

    return false;
}