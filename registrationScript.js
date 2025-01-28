function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');

    // Проверка силы пароля
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;

    strengthBar.style.width = strength + '%';

    // Цвет индикатора
    if (strength < 50) {
        strengthBar.style.backgroundColor = '#ef4444';
    } else if (strength < 75) {
        strengthBar.style.backgroundColor = '#f59e0b';
    } else {
        strengthBar.style.backgroundColor = '#22c55e';
    }
}

function handleRegister(event) {
    event.preventDefault();

    // Сбрасываем предыдущие ошибки
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Валидация имени пользователя
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Имя пользователя должно содержать минимум 3 символа';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Валидация email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('emailError').textContent = 'Введите корректный email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Валидация пароля
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Пароль должен содержать минимум 8 символов';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    if (!terms) {
        isValid = false;
        alert('Необходимо принять условия использования и политику конфиденциальности');
    }

    if (isValid) {
        // Здесь будет отправка данных на сервер
        console.log('Отправка формы:', { username, email, password });

        // Имитация отправки данных
        const button = document.querySelector('.button');
        button.disabled = true;
        button.textContent = 'Создание аккаунта...';

        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 1500);
    }

    return false;
}