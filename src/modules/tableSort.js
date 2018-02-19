function tableSort() {
  const table = {
    name: [
      'Thor Walton',
      'Quinn Flynn',
      'Jennifer Acosta',
      'Haley Kennedys',
      'Brielle Williamson',
      'Michael Silva',
      'Bradley Greer',
      'Dai Rios',
      'Herrod Chandler',
      'Zorrita Serrano',
    ],
    position: [
      'Developer',
      'Support Lead',
      'Junior JavaScript Developer',
      'Senior Marketing Designer',
      'Integration Specialist',
      'Marketing Designer',
      'Software Engineer',
      'Personnel Lead',
      'Sales Assistand',
      'Software Engineer',
    ],
    office: [
      'New York',
      'Edinburgh',
      'Edinburgh',
      'London',
      'New York',
      'London',
      'London',
      'Edinburgh',
      'San Francisco',
      'San Francisco',
    ],
    age: [61, 22, 43, 43, 61, 66, 41, 35, 59, 56],
    date: [
      '2013/08/11',
      '2013/03/03',
      '2013/02/01',
      '2012/12/18',
      '2012/12/02',
      '2012/11/27',
      '2012/10/13',
      '2012/09/26',
      '2012/08/06',
      '2012/06/01',
    ],
    salary: [
      98.54,
      342.0,
      75.56,
      313.5,
      372.0,
      198.5,
      132.0,
      217.5,
      137.5,
      115.0,
    ],
  };

  let rows = document.querySelectorAll('.main__table-content .main__table-row');
  let name = document.querySelectorAll('.name');
  let position = document.querySelectorAll('.position');
  let office = document.querySelectorAll('.office');
  let age = document.querySelectorAll('.age');
  let date = document.querySelectorAll('.date');
  let salary = document.querySelectorAll('.salary');

  for (let i = 0; i < rows.length; i++) {
    name[i].innerHTML = table.name[i];
    position[i].innerHTML = table.position[i];
    office[i].innerHTML = table.office[i];
    age[i].innerHTML = table.age[i];
    date[i].innerHTML = table.date[i];
    salary[i].innerHTML = '$' + table.salary[i].toFixed(3);
  }

  const sortAscending = val => {
    let sortedArr = [];
    let active = document.querySelectorAll(`.active-row .${val}`);
    let value = document.querySelectorAll(`.${val}`);

    for (let i = 0; i < value.length; i++) {
      if (value[i].parentElement.classList.contains('active-row')) {
        sortedArr.push(value[i].textContent);
      }
    }

    if (val == 'salary') {
      let sortedSalary = sortedArr.map(el => {
        let val = el.slice(1);
        let num = Number(val);
        return num;
      });
      sortedSalary.sort((a, b) => a > b);
      for (let i = 0; i < active.length; i++) {
        active[i].innerHTML = '$' + sortedSalary[i].toFixed(3);
      }
    } else {
      sortedArr.sort((a, b) => a > b);

      for (let i = 0; i < active.length; i++) {
        active[i].innerHTML = sortedArr[i];
      }
    }
  };

  const sortDescending = val => {
    let sortedArr = [];
    let active = document.querySelectorAll(`.active-row .${val}`);
    let value = document.querySelectorAll(`.${val}`);

    for (let i = 0; i < value.length; i++) {
      if (value[i].parentElement.classList.contains('active-row')) {
        sortedArr.push(value[i].textContent);
      }
    }

    if (val == 'salary') {
      let sortedSalary = sortedArr.map(el => {
        let val = el.slice(1);
        let num = Number(val);
        return num;
      });
      sortedSalary.sort((a, b) => a < b);
      for (let i = 0; i < active.length; i++) {
        active[i].innerHTML = '$' + sortedSalary[i].toFixed(3);
      }
    } else {
      sortedArr.sort((a, b) => a < b);

      for (let i = 0; i < active.length; i++) {
        active[i].innerHTML = sortedArr[i];
      }
    }
  };

  const clickHandler = (id, item) => {
    document.getElementById(id).addEventListener('click', function() {
      let arrowUp = this.querySelector('.fa-caret-up');
      let arrowDown = this.querySelector('.fa-caret-down');
      let caretUp = document.querySelectorAll('.fa-caret-up');
      let caretUpArr = Array.prototype.slice.call(caretUp);
      let caretDown = document.querySelectorAll('.fa-caret-down');
      let caretDownArr = Array.prototype.slice.call(caretDown);
      let cells = document.querySelectorAll('.main__table-cell');
      let idValue = this.getAttribute('id');
      let idValueArr = [];

      for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('cell-bg-even');
        cells[i].classList.remove('cell-bg-odd');
        if (cells[i].classList.contains(idValue)) {
          idValueArr.push(cells[i]);
        }
      }

      idValueArr.forEach((el, idx) => {
        if (idx % 2 == 0) {
          el.classList.add('cell-bg-even');
        } else {
          el.classList.add('cell-bg-odd');
        }
      });

      caretUpArr.forEach(el => {
        el.classList.remove('active-arrow');
        el.classList.remove('hidden-arrow');
      });

      caretDownArr.forEach(el => {
        el.classList.remove('active-arrow');
        el.classList.remove('hidden-arrow');
      });

      if (this.classList.contains('asc')) {
        arrowUp.classList.remove('hidden-arrow');
        arrowUp.classList.add('active-arrow');
        arrowDown.classList.remove('active-arrow');
        arrowDown.classList.add('hidden-arrow');
        sortAscending(item);
        this.classList.remove('asc');
        this.classList.add('desc');
        return;
      }

      if (this.classList.contains('desc')) {
        arrowDown.classList.remove('hidden-arrow');
        arrowDown.classList.add('active-arrow');
        arrowUp.classList.remove('active-arrow');
        arrowUp.classList.add('hidden-arrow');
        sortDescending(item);
        this.classList.remove('desc');
        this.classList.add('asc');
        return;
      }
    });
  };

  clickHandler('name', 'name');
  clickHandler('position', 'position');
  clickHandler('office', 'office');
  clickHandler('age', 'age');
  clickHandler('date', 'date');
  clickHandler('salary', 'salary');
}

export default tableSort;
