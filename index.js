// select all the icons elements. For each of the icons add a clicklistener which will toggle on(add open class to its parent element) and off(remove the open class from its parent element). Also change the icon when the element is open and when it is closed.

const icons = document.querySelectorAll('.icon-down');

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.parentElement.classList.toggle('open');
    const path = icon.childNodes[1];
    if (icon.parentElement.classList.contains('open')) {
      path.setAttribute('d', 'M4.5 15.75l7.5-7.5 7.5 7.5');
    } else {
      path.setAttribute('d', 'M19.5 8.25l-7.5 7.5-7.5-7.5');
    }
  });
});
