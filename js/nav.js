// nav dropdown
const dropDownBtn = document.querySelectorAll('.drop-down');
const drop = document.querySelectorAll('.nav-sec .drop');

dropDownBtn.forEach((btn, idx) => {
  $(btn).hover(() => {
    drop[idx].classList.toggle('active');
  });
});

// admission-open
const admissionBtn = document.querySelector('.admission-open .admission-btn');
const admissionList = document.querySelector('.admission-open .list');

admissionBtn.addEventListener('click', () => {
  admissionList.classList.toggle('active');
});
