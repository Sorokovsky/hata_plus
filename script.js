const popub = document.querySelector('#popub');
const call = document.querySelector('.header__btn');
if (call){
    call.addEventListener('click', () => {
        if (popub && !popub.classList.contains('_active') ) {
            popub.classList.add('_active');
            document.body.classList.add('_lock');            
        }
    });
}
document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.popub') && !target.closest('.popub__content')) {
        popub.classList.remove('_active');
        document.body.classList.remove('_lock');
    }
});