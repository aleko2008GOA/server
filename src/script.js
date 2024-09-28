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
        const response = await fetch('/src/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Email sent successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Cannot send email, please try again');
    }
});