import './FilterButtonGroup.css';
import { useState } from 'react';

const FilterButtonGroup = ({ buttons, handleFilterButtonClick }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    handleFilterButtonClick(event);
  };

  return (
    <nav className="filter__buttons">
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={
            i === clickedId ? 'filter__button_active' : 'filter__button'
          }
        >
          {buttonLabel}
        </button>
      ))}
    </nav>
  );
};

export default FilterButtonGroup;
