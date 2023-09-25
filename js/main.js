const nav = document.getElementById('navContainer');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    console.log('masuk');
    nav.classList.add('scroll');
    nav.classList.add('bg-white/50'); // Menghapus kelas 'bg-white/20'
  } else {
    nav.classList.remove('scroll'); // Menghapus kelas 'scroll' jika scrollY <= 1
    nav.classList.remove('bg-white/20'); // Menambahkan kelas 'bg-white/20' jika scrollY <= 1
  }
});