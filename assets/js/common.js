
//Header

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var headerhome = this.document.querySelector('.header-home');
    var scrollPosition = window.scrollY;
    console.log(header);
    // Change background color and height when scroll position is greater than 100px
    if (scrollPosition > 40) {
      header.style.backgroundColor = '#000'; // Change background color to black
      header.style.height = 'height: 80px;'; // Change header height
      headerhome.style.padding = '20px 0px '
    } else {
      header.style.backgroundColor = 'transparent'; // Change background color to transparent
    }
  });