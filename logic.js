const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        const message = document.getElementById('message');
        const image = document.getElementById('image');

        yesButton.addEventListener('click', function() {
            message.textContent = 'We will get married soon! 💍';
            message.classList.remove('hidden');
            image.innerHTML = '<img src="marrage.jpg" alt="Wedding Cartoon">';
            image.classList.remove('hidden');
        });

        noButton.addEventListener('click', function() {
            message.textContent = 'We will get engaged soon! 💑';
            message.classList.remove('hidden');
            image.innerHTML = '<img src="engage.jpg" alt="Engagement Cartoon">';
            image.classList.remove('hidden');
        });