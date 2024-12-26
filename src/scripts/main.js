'use strict';

const elements = document.querySelectorAll('input');

for (const element of elements) {
  const label = document.createElement('label');

  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
  label.classList.add('field-label');
  label.setAttribute('for', element.id);
  label.textContent = element.name;
  element.before(label);
}
