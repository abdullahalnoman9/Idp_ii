const login = document.getElementById('Log_in');
const signup = document.getElementById('sign_up');

signuppage = () => {
  login.style.display = 'none';
  signup.style.display = 'flex';
};
loginpage = () => {
  signup.style.display = 'none';
  login.style.display = 'flex';
};

const btns = document.querySelectorAll('.btns');
const authsection = document.querySelectorAll('.authsection');

var slideNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  authsection.forEach((slide) => {
    slide.classList.remove('active');
  });

  btns[manual].classList.add('active');
  authsection[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    slideNav(i);
  });
});

