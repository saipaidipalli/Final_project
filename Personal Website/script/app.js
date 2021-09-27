// Hamburger Menu Open Close on Mobile
document.querySelector('.toggle').addEventListener('click', () => {
  document.querySelector('.toggle').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});

//Form Submit Response

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form Submitted');
  document.querySelector('.reaching-out').style.display = 'block';
  document.querySelector('form').style.display = 'none';
});
