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

// // routes.js
// export const routes = [
//   { path: '/', name: 'Home', exact: true, component: HomePage },
//   { path: '/users', name: 'Users', component: UserPage },
//   // Add more routes as needed
// ];

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { routes } from './routes'; // Import your route config

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter(x => x);

//   return (
//     <nav aria-label="breadcrumb">
//       <ol>
//         {pathnames.map((value, index) => {
//           const last = index === pathnames.length - 1;
//           const to = `/${pathnames.slice(0, index + 1).join('/')}`;
//           const routeName = routes.find(route => route.path === to)?.name;

//           return (
//             <li key={to}>
//               {last ? (
//                 <span>{routeName}</span>
//               ) : (
//                 <Link to={to}>{routeName}</Link>
//               )}
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// };
