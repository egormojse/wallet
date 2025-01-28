function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const button = form.querySelector('.button');
    const successMessage = document.getElementById('successMessage');

    // Имитация отправки формы
    button.disabled = true;
    button.textContent = 'Отправка...';

    setTimeout(() => {
        form.reset();
        button.disabled = false;
        button.textContent = 'Отправить сообщение';
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }, 1500);

    return false;
}