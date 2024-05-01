import './ShowOnMapButton.css';

const ShowOnMapButton = ({ handleShowOnMap, showOnMap }) => {
  return (
    <button
      className="showOnMap-button"
      type="button"
      onClick={handleShowOnMap}
    >
      {!showOnMap ? 'Показать на карте' : 'Скрыть карту'}
    </button>
  );
};

export default ShowOnMapButton;
