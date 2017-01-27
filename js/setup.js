'use strict';

var setup = document.querySelector('.setup');
var randColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

function eventOpen(btnClass) {
  document.querySelector(btnClass).addEventListener('click', function () {
    setup.classList.remove('invisible');
  });
}

function eventClose(btnClass) {
  document.querySelector(btnClass).addEventListener('click', function () {
    setup.classList.add('invisible');
  });
}

function eventChangeColor(id, colors, method) {
  document.querySelector(id).addEventListener('click', function () {
    if (method === 'fill') {
      document.querySelector(id).style.fill = randColor(colors);
    } else if (method === 'backgroundColor') {
      document.querySelector(id).style.backgroundColor = randColor(colors);
    }
  });
}

eventOpen('.setup-open');
eventClose('.setup-close');

eventChangeColor('#wizard-coat', ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], 'fill');
eventChangeColor('#wizard-eyes', ['black', 'red', 'blue', 'yellow', 'green'], 'fill');
eventChangeColor('.setup-fireball-wrap', ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'], 'backgroundColor');
