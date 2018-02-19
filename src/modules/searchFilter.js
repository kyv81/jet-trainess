const searchFilter = () => {
  document.getElementById('search-btn').addEventListener('click', () => {
    let input = document.getElementById('search-input').value;
    let cells = document.querySelectorAll('.main__table-cell');
    let rows = document.querySelectorAll(
      '.main__table-content .main__table-row',
    );
    let rowsArr = Array.prototype.slice.call(rows);

    rowsArr.forEach(el => {
      el.classList.remove('active-row');
      el.classList.add('hidden-row');
    });

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent.toLowerCase().indexOf(input) !== -1) {
        cells[i].parentElement.classList.remove('hidden-row');
        cells[i].parentElement.classList.add('active-row');
      }
    }
  });
};

export default searchFilter;
