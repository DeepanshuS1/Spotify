const searchBar = document.querySelector('.search');
const brosweBtn = document.querySelector('.browsebtn');
const cross = document.querySelector('#cross');

searchtype.addEventListener('focus', () => {
    searchBar.style.border = '2px solid #fff';
});

searchtype.addEventListener('blur', () => {
    searchBar.style.border = 'none';
});

searchtype.addEventListener('input', () => {
    if (searchtype.value !== "") {
        cross.style.display = 'inline-block';
        brosweBtn.style.display = 'none';
    }else{
        cross.style.display = 'none';
        brosweBtn.style.display = 'inline-block';
    }
});