const Nav = () => {
    
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    openMenu.addEventListener('click', () => {
        console.log('Open !')
        openMenu.style.display= 'none';
        closeMenu.style.display= 'block';
        menu.style.display = 'grid';
    });

    closeMenu.addEventListener('click', () => {
        console.log('Close !')
        closeMenu.style.display= 'none';
        openMenu.style.display= 'block';
        menu.style.display = 'none';
    });
}

export default Nav