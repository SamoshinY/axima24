import './BreadcrumbsMe.css';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  let breadcrumbPath = '';

  return (
    <div className="breadcrumbs">
      <Link to="/">Главная</Link>

      {pathnames.map((pathItem, index) => {
        breadcrumbPath += `/${pathItem}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span> &rsaquo; {pathItem}</span>
        ) : (
          <span>
            {' '}
            &rsaquo; <Link to={breadcrumbPath}>{pathItem}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
