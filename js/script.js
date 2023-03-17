// RUBIATO, JOHN CLEMENT R.

document.addEventListener('scroll', () => {
    navigation = document.getElementById('navigation');
    selected = document.getElementById('selected');

    if (window.scrollY > 0) {
      selected.classList.remove('active');
      navigation.classList.add('navbar-colored');
      selected.classList.add('active-2')

    }else{
      selected.classList.remove('active-2');
      navigation.classList.remove('navbar-colored');
      selected.classList.add('active');
    }
});