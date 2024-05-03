import './FilterButtonGroup.css';
import { useState } from 'react';

const FilterButtonGroup = ({ buttons, handleButtonClick }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    handleButtonClick(event);
  };

  return (
    <>
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
    </>
  );
};

export default FilterButtonGroup;
