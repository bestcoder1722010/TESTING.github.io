const searchInput = document.getElementById('my_Input');
const searchableDivs = document.querySelectorAll('.card-text,.card');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchableDivs.forEach(div => {
    if (div.textContent.toLowerCase().includes(searchTerm)) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
});
console.log(searchableDivs);