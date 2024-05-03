import './Filter.css';
import FilterButtonGroup from '../FilterButtonGroup/FilterButtonGroup';

const Filter = ({ initialList, handleButtonClick }) => {
  const filterOptions = (option) => {
    const options = initialList
      .filter((item) => item[option])
      .map((item) => item[option]);
    return [...new Set(options)];
  };

  const option = 'size';

  const options = filterOptions(option);

  const all = initialList.some((o) => o.category == 'Санфаянс GESSO')
    ? 'Все'
    : 'Все размеры';

  const buttons = [all, ...options];

  return (
    <nav className="filter">
      <FilterButtonGroup
        buttons={buttons}
        handleButtonClick={handleButtonClick}
      />
    </nav>
  );
};

export default Filter;
