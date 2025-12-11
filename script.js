const toggleTheme = document.getElementById('toggle');
const showLeft = document.getElementById('showLeft');
const showRight = document.getElementById('showRight');
const leftAside = document.querySelector('.left');
const rightAside = document.querySelector('.right');
const body = document.body;


toggleTheme.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});


let leftVisible = false;
let rightVisible = false;

function updateArrows() {
  showLeft.innerHTML = leftVisible ? '⮜' : '⮞';
  showRight.innerHTML = rightVisible ? '⮞' : '⮜';
}


showLeft.addEventListener('click', () => {
  leftVisible = !leftVisible;
  leftAside.classList.toggle('show', leftVisible);
  updateArrows();
});


showRight.addEventListener('click', () => {
  rightVisible = !rightVisible;
  rightAside.classList.toggle('show', rightVisible);
  updateArrows();
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    leftAside.classList.remove('show');
    rightAside.classList.remove('show');
    leftVisible = false;
    rightVisible = false;
    updateArrows();
  }
});

updateArrows();


