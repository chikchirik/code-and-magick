'use strict';

/* SETUP */
var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.overlay');
var setupClose = setupOverlay.querySelector('.setup-close');
var setupSubmit = setupOverlay.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setupOverlay.classList.add('invisible');
    setupOverlay.setAttribute('aria-hidden', 'true');
  }
};

var hideSetupHandler = function (event) {
  hideSetupElement();
  setPressedStatus(event.target);
};

var showSetupHandler = function (event) {
  showSetupElement();
  setPressedStatus(event.target);
};

var currentPressedElement = null;

function setPressedStatus(element) {
  if (currentPressedElement) {
    currentPressedElement.setAttribute('aria-pressed', 'false');
  }
  currentPressedElement = element;
  currentPressedElement.setAttribute('aria-pressed', 'true');
}

var showSetupElement = function () {
  setupOverlay.classList.remove('invisible');
  setupOverlay.setAttribute('aria-hidden', 'false');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetupElement = function () {
  setupOverlay.classList.add('invisible');
  setupOverlay.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', setupKeydownHandler);
};

function setAttributes(element, attributes) {
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

setAttributes(setupOverlay.querySelector('.setup-user-name'), {'maxlength': 50, 'required': ''});
setAttributes(setupOverlay, {'role': 'dialog', 'aria-hidden': 'true'});
setAttributes(setupOpen.querySelector('.setup-open-icon'), {'role': 'button', 'aria-pressed': 'false', 'tabindex': '1'});
setAttributes(setupClose, {'role': 'button', 'aria-pressed': 'false', 'tabindex': '2'});

setupOpen.addEventListener('click', showSetupHandler);
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showSetupHandler(event);
  }
});

setupClose.addEventListener('click', hideSetupHandler);
setupSubmit.addEventListener('click', hideSetupHandler);
setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetupHandler(event);
  }
});

/* WIZARD */
var currentNumberColor = 0;
var nextColor = function (colors) {
  return colors[++currentNumberColor % colors.length];
};

function eventChangeColor(id, colors, method) {
  document.querySelector(id).addEventListener('click', function (event) {
    event.currentTarget.style[method] = nextColor(colors);
  });
}

eventChangeColor('#wizard-coat', ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], 'fill');
eventChangeColor('#wizard-eyes', ['black', 'red', 'blue', 'yellow', 'green'], 'fill');
eventChangeColor('.setup-fireball-wrap', ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'], 'backgroundColor');
