import './PageHeader.css';
import BreadcrumbsMe from '../BreadcrumbsMe/BreadcrumbsMe';

function PageHeader({ header }) {
  return (
    <div className="page-header">
      <BreadcrumbsMe />
      <h1 className="page-header__name">{header}</h1>
    </div>
  );
}

export default PageHeader;
