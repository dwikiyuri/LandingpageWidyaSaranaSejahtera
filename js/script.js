<script>
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveLink() {
      let index = sections.length;

      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
  });
</script>