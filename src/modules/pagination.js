const pagination = () => {
  let pagDiv = document.querySelector('.pagination').children;
  let number = document.querySelectorAll('.number');
  let numberArr = Array.prototype.slice.call(number);
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  numberArr.forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      prev.classList.remove('inactive-link');
      next.classList.remove('inactive-link');
      for (let i = 0; i < pagDiv.length; i++) {
        if (pagDiv[i].classList.contains('active-number')) {
          pagDiv[i].classList.remove('active-number');
          break;
        }
      }
      this.classList.add('active-number');
      if (number[0].classList.contains('active-number')) {
        prev.classList.add('inactive-link');
      }
      if (number[number.length - 1].classList.contains('active-number')) {
        next.classList.add('inactive-link');
      }
    });
  });

  prev.addEventListener('click', e => {
    e.preventDefault();
    next.classList.remove('inactive-link');
    for (let i = 0; i < number.length; i++) {
      if (number[i].classList.contains('active-number')) {
        number[i].classList.remove('active-number');
        if (number[i - 1]) {
          number[i - 1].classList.add('active-number');
        } else {
          number[i].classList.add('active-number');
        }
        break;
      }
    }
    if (number[0].classList.contains('active-number')) {
      prev.classList.add('inactive-link');
    }
  });

  next.addEventListener('click', e => {
    e.preventDefault();
    prev.classList.remove('inactive-link');
    for (let i = 0; i < number.length; i++) {
      if (number[i].classList.contains('active-number')) {
        number[i].classList.remove('active-number');
        if (number[i + 1]) {
          number[i + 1].classList.add('active-number');
        } else {
          number[i].classList.add('active-number');
        }
        break;
      }
    }
    if (number[number.length - 1].classList.contains('active-number')) {
      next.classList.add('inactive-link');
    }
  });
};

export default pagination;
