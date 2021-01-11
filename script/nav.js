const Nav = () => {
    
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');
    const index = document.getElementById('index');

    openMenu.addEventListener('click', () => {
        console.log('Open !')
        openMenu.style.display= 'none';
        closeMenu.style.display= 'block';
        index.classList.add('blur');
        menu.style.display = 'grid';
    });

    closeMenu.addEventListener('click', () => {
        console.log('Close !')
        closeMenu.style.display= 'none';
        openMenu.style.display= 'block';
        index.classList.remove('blur');
        menu.style.display = 'none';
    });
}

export default Nav