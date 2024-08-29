let hamburger=document.getElementById(`hamburger`)
let overlayBox=document.getElementById(`overlayBox`)
let closeIcon=document.getElementById(`close`)
let linkBox=document.getElementById(`textlink`)



hamburger.addEventListener('click', openModal);
closeIcon.addEventListener('click', closeModal);
linkBox.addEventListener('click', function(event) {
    event.stopPropagation();
});

function openModal() {
    overlayBox.style.visibility = 'visible';
}

function closeModal() {
    overlayBox.style.visibility = 'hidden';
}

overlayBox.addEventListener('click', function(event) {
    if (event.target === overlayBox) {
        closeModal();
    }
});