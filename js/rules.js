import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import {game1Node, addScreenLogic as addGame1ScreenLogic} from './game1';
import header from './header';
import footer from './footer';

export const rulesNode = createDomElement(`
${header}
<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>
${footer}
`);

export function addScreenLogic() {
  const form = document.querySelector(`.rules__form`);
  const submitButton = form.querySelector(`.rules__button`);
  const userNameInput = form.querySelector(`.rules__input`);

  userNameInput.addEventListener(`input`, ({target}) => {
    if (target.value.trim() !== ``) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  });

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    renderScreen(game1Node);
    addGame1ScreenLogic();
  });
}
