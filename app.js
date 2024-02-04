document.addEventListener('DOMContentLoaded', function () {
    function checkboxCallback(answer) {
        displayResponse(answer);
    }

    function displayResponse(answer) {
        var responseElement = document.getElementById('response');
        responseElement.innerHTML = '';

        if (answer === 'yes') {
            responseElement.innerHTML = 'That\'s wonderful! 🥰 Happy Valentine\'s Day!';
        } else if (answer === 'no') {
            responseElement.innerHTML = 'Oh no! 😢 Maybe next time.';
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    function checkboxCallback(answer) {
        displayResponse(answer);
    }

    function addGif() {
        var gifInput = document.getElementById('gifInput');
        var gifUrl = gifInput.value;

        if (gifUrl.trim() !== '') {
            var gifContainer = document.getElementById('gifContainer');
            var gifImage = document.createElement('img');
            gifImage.src = gifUrl;
            gifContainer.innerHTML = '';
            gifContainer.appendChild(gifImage);
        }
    }

    function displayResponse(answer) {
        var responseElement = document.getElementById('response');
        responseElement.innerHTML = '';

        if (answer === 'yes') {
            responseElement.innerHTML = 'That\'s wonderful! 🥰 Happy Valentine\'s Day!';
        } else if (answer === 'no') {
            responseElement.innerHTML = 'Oh no! 😢 Maybe next time.';
        }
    }
});
