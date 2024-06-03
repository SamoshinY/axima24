import './PageHeader.css';
// import BreadcrumbsMe from '../BreadcrumbsMe/BreadcrumbsMe';
import BreadcrumbsNew from '../BreadcrumbsNew/BreadcrumbsNew';

function PageHeader({ header }) {
  return (
    <div className="page-header">
      {/* <BreadcrumbsMe /> */}
      <BreadcrumbsNew />
      <h1 className="page-header__name">{header}</h1>
    </div>
  );
}

export default PageHeader;
