function handleLogin(event) {
    event.preventDefault();

    
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
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
        
        console.log('Отправка формы:', { email, password });

        
        const button = document.querySelector('.button');
        button.disabled = true;
        button.textContent = 'Вход...';

        setTimeout(() => {
            
            window.location.href = '/dashboard';
        }, 1500);
    }

    return false;
}