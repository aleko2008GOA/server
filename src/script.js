const form = document.getElementById("form");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        age: e.target.age.value,
        class_year: e.target.class_year.value,
        index: e.target.index.value
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Ошибка: ${errorMessage}`);
        }
        alert('Письмо успешно отправлено!');
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось отправить письмо, попробуйте еще раз');
    }
});