const form_cont = document.getElementById('form_cont');
const error_screen = document.getElementById('error');
const sent_screen = document.getElementById('sent');
const loading_screen = document.getElementById('loading_screen');

window.onload = () =>{
    setTimeout(() =>{
        form_cont.style.display = 'block';
        loading_screen.style.display = 'none';

        const form = document.getElementById("form");

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            form_cont.style.display = 'none';
            loading_screen.style.display = 'flex';

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
                    throw new Error(`Error while sending email: ${errorMessage}`);
                }

                sent_screen.style.display = 'block';
                loading_screen.style.display = 'none'; 
            } catch (error) {
                console.error('Error:', error);

                error_screen.style.display = 'block';
                loading_screen.style.display = 'none';
            }
        });

        document.getElementById("again").addEventListener("click", () =>{
            setTimeout(() =>{
                form_cont.style.display = 'block';
                loading_screen.style.display = 'flex';
            }, 1000);
        });
    }, 1000);
}