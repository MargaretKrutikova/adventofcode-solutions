import "babel-polyfill";
import Solutions from './solutions';

(function() {
  let answersContainer = document.getElementById('answers');
  Object.keys(Solutions).forEach(day => {
    answersContainer.appendChild(document.createTextNode(`${day}: ${Solutions[day]}`));
    answersContainer.appendChild(document.createElement('br'));
  });
})();