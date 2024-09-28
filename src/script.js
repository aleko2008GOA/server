const form = document.getElementById("form");

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const user = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        age: e.target.age.value,
        class_year: e.target.class_year.value,
        index: e.target.index.value
    }
    console.log('user created')

    try {
        console.log('yes')
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        console.log('yes')
        alert('Email sent successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Can not send email, please try again');
    }
});