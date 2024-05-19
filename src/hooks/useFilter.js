import { useState, useEffect } from 'react';
import getUniqueValues from '../utils/getUniqueValues';

export const useFilter = (list, option) => {
  const [filteredList, setFilteredList] = useState(list);

  // меняем состояние при изменении входящего массива
  useEffect(() => {
    setFilteredList(list);
  }, [list]);

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

  const options = getUniqueValues(list, option);

  const allButton = list.some((item) => item.section.name === 'Санфаянс GESSO')
    ? 'Все'
    : 'Все размеры';

  const buttons = [allButton, ...options];

  return {
    buttons,
    handleFilterButtonClick,
    filteredList,
  };
};
