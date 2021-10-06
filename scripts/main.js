let THUMBNAIL_LIST_SELECTOR = '[data-image-role="trigger"]';
let DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let THUMBNAIL_DETAIL_TITLE = 'data-image-title';
let HIDDEN_DETAILS_CLASS = 'hidden_details';
let ESCAPE = 'Escape';
let DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
let IS_TINY_CLASS = 'is_tiny'

function getAllThumbnails() {
    return document.querySelectorAll(THUMBNAIL_LIST_SELECTOR)
}

function addListner(thumbnail) {
    thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        setDetails(thumbnail);
        showDetails()
    })
}

function setDetails(thumbnail) {
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.src = thumbnail.href;
    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = thumbnail.getAttribute(THUMBNAIL_DETAIL_TITLE);
}

getAllThumbnails().forEach(addListner);

function hideDetails() {
    document.body.classList.add(HIDDEN_DETAILS_CLASS);
}

function showDetails() {

    document.body.classList.remove(HIDDEN_DETAILS_CLASS);
    let detailFrame = document.querySelector(DETAIL_FRAME_SELECTOR);
    detailFrame.classList.add(IS_TINY_CLASS);
    setTimeout(function () {
        detailFrame.classList.remove(IS_TINY_CLASS);
    }, 100);
}

document.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.key === ESCAPE) {
        hideDetails();
    }
})
