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
var feedbackCheckboxError = feedbackForm.querySelector('.js-feedback-checkbox');
var countrySelectedInput = feedbackForm.querySelector('.js-select-input');
var countryItem = feedbackForm.querySelectorAll('.cuontry-item');
var pattermail = /^[a-zA-Z @.]+$/;
var pattername = /^[a-zA-Z]+$/;

mailInput.addEventListener('input', function () {
    if (!pattermail.test(mailInput.value)) {
        errorMail.classList.add('error-show');
        mailInput.classList.add('error');
    } else {
        mailInput.classList.remove('error');
        errorMail.classList.remove('error-show');
    }
})

nameUserInput.addEventListener('input', function () {
    if (!pattername.test(nameUserInput.value)) {
        errorName.classList.add('error-show');
        nameUserInput.classList.add('error');
    } else {
        nameUserInput.classList.remove('error');
        errorName.classList.remove('error-show');
    }
})

for (var i = 0; i < countryItem.length; i++) {
    countryItem[i].addEventListener('click', function () {
        countrySelectedInput.value = this.innerText;
})
}

feedbackForm.addEventListener('submit', function (evt) {
    if (!pattermail.test(mailInput.value)) {
        errorMail.classList.add('error-show');
        evt.preventDefault();
    }
    if (!pattername.test(nameUserInput.value)) {
        errorName.classList.add('error-show');
        evt.preventDefault();
    }
    if (!feedbackCheckbox.checked) {
        feedbackCheckboxError.classList.add('checkbox-agree-error');
        evt.preventDefault();
    }
    if (!countrySelectedInput.value) {
        countrySelectedInput.classList.add('error');
        evt.preventDefault();
    }
    if (pattermail.test(mailInput.value) && pattername.test(nameUserInput.value) && feedbackCheckbox.checked && countrySelectedInput.value) {
        errorMail.classList.remove('error-show');
        errorName.classList.remove('error-show');
        feedbackCheckboxError.classList.remove('checkbox-agree-error');
        countrySelectedInput.classList.remove('error');
    }
})
