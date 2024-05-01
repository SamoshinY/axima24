import './SectionHeader.css';

const SectionHeader = ({ caption }) => {
  return (
    <div className="section__header">
      <div className="section__redline"></div>
      <h2 className="section__name">{caption}</h2>
    </div>
  );
};

export default SectionHeader;
