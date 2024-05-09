import { useState } from 'react';

export const useFilter = (list, option) => {
  const [filteredList, setFilteredList] = useState(list);

  const handleFilterButtonClick = (event) => {
    const filteredSizeList = list.filter(
      (item) =>
        item?.size === event.target.name ||
        'Все размеры' === event.target.name ||
        'Все' === event.target.name
      // придумать, как допилить с проверкой  и переименовать константу
    );
    setFilteredList(filteredSizeList);
  };

  const filterOptions = (option) => {
    const options = list
      .filter((item) => item[option])
      .map((item) => item[option]);
    return [...new Set(options)];
  };

  const options = filterOptions(option);

  const allButton = list.some((o) => o.category.toString() === 'Санфаянс GESSO')
    ? 'Все'
    : 'Все размеры';

  const buttons = [allButton, ...options];

  return {
    buttons,
    handleFilterButtonClick,
    filteredList,
  };
};
