var modalPopup = document.querySelector('.js-popup');
var closeButtonPopup = document.querySelector('.js-button-popup-close');
var promoListItem = document.querySelectorAll('.js-menu-promo-item');
var cancelButtonPopup = document.querySelector('.js-button-popup-cancel'); 

for (var i = 0; i < promoListItem.length; i++) {
    promoListItem[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        modalPopup.classList.add('popup-show');
    })
}
closeButtonPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('popup-show');
})
cancelButtonPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('popup-show');
})
document.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
       modalPopup.classList.remove('popup-show'); 
    }
})

var postContentCard = document.querySelectorAll('.js-post-content');
var postContentCardToggle = document.querySelectorAll('.js-post-content-show');

for (var i = 0; i < postContentCardToggle.length; i++) {
    postContentCardToggle[i].addEventListener('click', function (evt) {
        evt.preventDefault;
        this.parentNode.classList.toggle('up-down-content');
    })    
}