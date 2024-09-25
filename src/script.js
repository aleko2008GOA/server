const form = document.getElementById("form");

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const user = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        age: e.target.age.value,
        class: e.target.class.value,
        index: e.target.index.value
    }

    try{
        const response = await fetch('/click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            console.log('Form has been sent!')
            form.reset(); 
        } else {
            console.log('Error, can not reach server');
        }
    } catch (error) {
        console.error('Error: ', error);
    }
});