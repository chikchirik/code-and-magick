'use strict';

var LINKS = {};
var randColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

function getLink(selector) {
  return selector in LINKS ? LINKS[selector] : (LINKS[selector] = document.querySelector(selector));
}

function eventOpen(btnClass, windowClass) {
  getLink(btnClass).addEventListener('click', function () {
    getLink(windowClass).classList.remove('invisible');
  });
}

function eventClose(btnClass, windowClass) {
  getLink(btnClass).addEventListener('click', function () {
    getLink(windowClass).classList.add('invisible');
  });
}

function eventChangeColor(id, colors, method) {
  getLink(id).addEventListener('click', function () {
    getLink(id).style[method] = randColor(colors);
  });
}

eventOpen('.setup-open', '.setup');
eventClose('.setup-close', '.setup');

eventChangeColor('#wizard-coat', ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], 'fill');
eventChangeColor('#wizard-eyes', ['black', 'red', 'blue', 'yellow', 'green'], 'fill');
eventChangeColor('.setup-fireball-wrap', ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'], 'backgroundColor');
