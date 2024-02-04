function displayResponse(answer) {
    var responseElement = document.getElementById('response');
    responseElement.innerHTML = '';

    if (answer === 'yes') {
        var imagePath = 'happy.png';
        responseElement.innerHTML = '<img src="' + imagePath + '" alt="Happy Image">';
    } else if (answer === 'no') {
        var imagePath = 'sad.jpg';
        responseElement.innerHTML = '<img src="' + imagePath + '" alt="Stupid Image">';
    }

    // Add heart-shaped overlay
    var heartOverlay = document.createElement('div');
    heartOverlay.classList.add('heart-overlay');
    responseElement.appendChild(heartOverlay);
}
