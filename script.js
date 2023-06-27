const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');
const okBtn = document.querySelector('.ok');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

okBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
    modalWrapper.classList.remove('active');
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeModal();
    }
});

function openModal() {
    modalWrapper.classList.add('active');
}

function closeModal() {
    modalWrapper.classList.remove('active');
}