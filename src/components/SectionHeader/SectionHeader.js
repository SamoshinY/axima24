import InfoNav from '../InfoNav/InfoNav';
import './SectionHeader.css';

const SectionHeader = ({ caption }) => {
  return (
    <div className="section__header">
      <div className="section__redline"></div>
      <h2 className="section__name">{caption}</h2>
      {caption === 'Инфоцентр' && <InfoNav />}
    </div>
  );
};

export default SectionHeader;
