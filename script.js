// Toggle like button
document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    let icon = button.querySelector('i');
    if (button.classList.contains('liked')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
  });
});
