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
var mailInput = document.querySelector('.js-feedback-email');
var nameUserInput = document.querySelector('.js-feedback-name');
var selectCountryInput = document.querySelector('.js-select-input');
var feedbackCheckbox = document.querySelector('.js-checkbox-agree');
var feedbackSubmit = document.querySelector('.js-button-fedback-submit');

mailInput.addEventListener('input', function () {
    nameUserInput.value = this.value;
})
