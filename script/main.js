

// day1

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overLay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');

const openMenu = () => {
        catalog.classList.add('open');
        overLay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overLay.classList.remove('active');
};

const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList){
        subcatalogHeader.innerHTML = target.innerHTML;
        subCatalog.classList.add('subopen');
    };
};


btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overLay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
