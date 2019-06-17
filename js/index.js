var modalPopup = document.querySelector('.js-popup');
var closeButtonPopup = document.querySelector('.js-button-popup-close');
var promoListItem = document.querySelectorAll('.js-menu-promo-item');
var cancelButtonPopup = document.querySelector('.js-button-popup-cancel'); 

for (var i = 0; i < promoListItem.length; i++) {
    promoListItem[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        modalPopup.classList.add('popup-show');
    });
}

closeButtonPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('popup-show');
});

cancelButtonPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('popup-show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
       modalPopup.classList.remove('popup-show'); 
    }
});
var postContentCardToggle = document.querySelectorAll('.js-post-content-show');

for (var i = 0; i < postContentCardToggle.length; i++) {
    postContentCardToggle[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        this.parentElement.classList.toggle('up-down-content');
    })    
}
var feedbackForm = document.querySelector('.feedback-form');
var mailInput = feedbackForm.querySelector('.js-feedback-email');
var nameUserInput = feedbackForm.querySelector('.js-feedback-name');
var selectCountryInput = feedbackForm.querySelector('.js-select-input');
var feedbackCheckbox = feedbackForm.querySelector('.js-checkbox-agree');
var feedbackSubmit = feedbackForm.querySelector('.js-button-fedback-submit');
var errorMail = feedbackForm.querySelector('.js-email-invalid-error');
var errorName = feedbackForm.querySelector('.js-name-invalid-error');

mailInput.addEventListener('input', function () {
    var mailvalue = this.value;
    var pattermail = /^[a-zA-Z @]+$/;
    if (!pattermail.test(mailInput.value)) {
        errorMail.classList.add('error-show');
    } else {
        errorMail.classList.remove('error-show');
    }
})

nameUserInput.addEventListener('input', function () {
    var pattername = /^[a-zA-Z @]+$/;
    if (!pattername.test(nameUserInput.value)) {
        errorName.classList.add('error-show');
    } else {
        errorName.classList.remove('error-show');
    }
})
