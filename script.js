const popub = document.querySelector('#popub');
const call = document.querySelector('.header__btn');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
if (call){
    call.addEventListener('click', (e) => {
        e.preventDefault();
        if (popub && !popub.classList.contains('_active') ) {
            popub.classList.add('_active');
            document.body.classList.add('_lock');            
        }
    });
}
if (burger){
    burger.addEventListener('click', (e) => {
        if(menu){
            const { target } = e;
            if(menu.classList.contains('_active')){
                menu.classList.remove('_active');
                burger.classList.remove('_active');
                burger.children[0].classList.remove('_active');
                document.body.classList.remove('_lock');
            }else{
                menu.classList.add('_active');
                burger.classList.add('_active');
                burger.children[0].classList.add('_active');
                document.body.classList.add('_lock');
            }
        }
    });
}
document.body.addEventListener('click', (e) => {
    const { target } = e;
    if ((target.closest('.popub') && !target.closest('.popub__content') || target.classList.contains('popub__close'))) {
        popub.classList.remove('_active');
        e.preventDefault();
        document.body.classList.remove('_lock');
    }
});