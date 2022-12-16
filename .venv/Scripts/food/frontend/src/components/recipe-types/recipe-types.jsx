import './recipe-types.scss';
import React from 'react';
const RecipeTypes = () => {
  return (<nav className="recipe-types">
    <ul className="recipe-types__list">
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button recipe-types__button_active"
        >
          Все
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Завтраки
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Супы
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Второе
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Салаты
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Сладкое
        </button>
      </li>
      <li className="recipe-types__list-item">
        <button
          className="recipe-types__button"
        >
          Закуски
        </button>
      </li>
    </ul>
  </nav>);
};

export default RecipeTypes;
