document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementsByClassName('proj-homepic');

    Array.from(images).forEach(function(img) {
        img.style.opacity = 0;

        let opacity = 0;
        const interval = setInterval(function () {
            opacity += 0.01;
            img.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(interval);
            }
        }, 10); 
    });
});

window.onload = function () {
    function validatePhoneNumber() {
        let phoneNumberInput = document.getElementById('phone');
        let phoneNumber = phoneNumberInput.value;
        phoneNumber = phoneNumber.replace(/\D/g, '');
        if (phoneNumber.length !== 10) {
            alert('Please enter a 10-digit phone number');
            phoneNumberInput.focus();
            return false;
        }
        return true;
    }

    let form = document.getElementById('contactform');
    form.addEventListener('submit', function (event) {
        if (!validatePhoneNumber()) {
            event.preventDefault(); 
        }
    });
};
