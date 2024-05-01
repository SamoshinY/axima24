import './MoreButton.css';

const MoreButton = ({ handleShowMoreCards }) => {
  return (
    <button className="more-button" type="button" onClick={handleShowMoreCards}>
      Показать ещё
    </button>
  );
};

export default MoreButton;
