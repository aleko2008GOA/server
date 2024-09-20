const button = document.getElementById('count');

button.addEventListener('click', async () =>{
    try {
        const response = await fetch('/click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: 'User clicked!'})
        });

        if (response.ok) {
            alert('Data submitted successfully!');
        } else {
            alert('Error submitting data.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting data.');
    }
});