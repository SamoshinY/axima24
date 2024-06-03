// import { Route, createRoutesFromElements } from 'react-router-dom';
import Main from '../components/Main/Main';
import AboutUs from '../components/AboutUs/AboutUs';
import Contacts from '../components/Contacts/Contacts';
import CatalogPage from '../components/CatalogPage/CatalogPage';
import NotFound from '../components/NotFound/NotFound';
import CollectionPage from '../components/CollectionPage/CollectionPage';
import InfoCenter from '../components/InfoCenter/InfoCenter';
import InfoSubsection from '../components/InfoSubsection/InfoSubsection';
import InfoPage from '../components/InfoPage/InfoPage';
import FavoritesPage from '../components/FavoritesPage/FavoritesPage';
import CatalogSectionBox from '../components/CatalogSectionBox/CatalogSectionBox';
import Layout from '../components/Layout/Layout';

const routesNew = [
  {
    path: '/',
    element: <Layout />,
    handle: { breadcrumb: 'Главная' },
    children: [
      { index: true, element: <Main /> },
      {
        path: 'catalog',
        children: [
          { index: true, element: <CatalogPage /> },
          {
            path: ':category',
            element: <CatalogSectionBox />,
            children: [{ path: ':collection', element: <CollectionPage /> }],
          },
        ],
      },
      {
        path: 'info',
        children: [
          { index: true, element: <InfoCenter /> },
          {
            path: ':subsection',
            element: <InfoSubsection />,
            children: [{ path: ':content', element: <InfoPage /> }],
          },
        ],
      },
      { path: 'about', element: <AboutUs /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

// const routes = createRoutesFromElements(
//   <Route path="/" element={<Layout />} handle={{ breadcrumb: 'Главная' }}>
//     <Route index element={<Main />} />
//     <Route path="catalog">
//       <Route
//         index
//         element={<CatalogPage />}
//         handle={{ breadcrumb: 'Каталог' }}
//       />
//       <Route path=":category">
//         <Route
//           index
//           element={<CatalogSectionBox />}
//           handle={{
//             breadcrumb: 'Категория',
//           }}
//         />
//         <Route
//           path=":collection"
//           element={<CollectionPage />}
//           handle={{ breadcrumb: 'Коллекция' }}
//         />
//       </Route>
//     </Route>
//     <Route path="info">
//       <Route
//         index
//         element={<InfoCenter />}
//         handle={{ breadcrumb: 'Инфоцентр' }}
//       />
//       <Route path=":subsection">
//         <Route
//           index
//           element={<InfoSubsection />}
//           handle={{ breadcrumb: 'Подраздел' }}
//         />
//         <Route
//           path=":content"
//           element={<InfoPage />}
//           handle={{ breadcrumb: 'Информация' }}
//         />
//       </Route>
//     </Route>
//     <Route
//       path="about"
//       element={<AboutUs />}
//       handle={{ breadcrumb: 'О нас' }}
//     />
//     <Route
//       path="contacts"
//       element={<Contacts />}
//       handle={{ breadcrumb: 'Контакты' }}
//     />
//     <Route
//       path="favorites"
//       element={<FavoritesPage />}
//       handle={{ breadcrumb: 'Избранное' }}
//     />
//     <Route path="*" element={<NotFound />} />
//   </Route>
// );

export default routesNew;

// const routes = createRoutesFromElements(
//   <Route
//     path="/"
//     element={<Layout favorites={favorites} />}
//     handle={{ breadcrumb: 'Главная' }}
//     // handle={{ breadcrumb: () => ({ path: '/', label: 'Главная' }) }}
//   >
//     <Route
//       index
//       element={
//         <Main
//           list={modifiedList}
//           handleCardClick={handleCardClick}
//           handleCatalogSectionClick={handleCatalogSectionClick}
//           handleInfoCardClick={handleInfoCardClick}
//         />
//       }
//       // handle={{ breadcrumb: 'Главная' }}
//     />
//     <Route path="catalog">
//       <Route
//         index
//         element={
//           <CatalogPage
//             categorys={categorys}
//             handleCatalogSectionClick={handleCatalogSectionClick}
//           />
//         }
//         handle={{ breadcrumb: 'Каталог' }}
//         // handle={{
//         //   breadcrumb: () => ({ path: '/catalog', label: 'Каталог' }),
//         // }}
//       />
//       <Route path=":category">
//         <Route
//           index
//           element={
//             <CatalogSectionBox
//               selectedCatalogSection={selectedCatalogSection}
//               list={modifiedList}
//               handleCardClick={handleCardClick}
//               handleCatalogSectionClick={handleCatalogSectionClick}
//             />
//           }
//           handle={{
//             breadcrumb: selectedCatalogSection?.name || 'Категория',
//           }}

//           // handle={{
//           //   breadcrumb: () => ({
//           //     path: `${selectedCatalogSection.path}`,
//           //     label: `${selectedCatalogSection.name}`,
//           //   }),
//           // }}
//         />
//         <Route
//           path=":collection"
//           element={
//             <CollectionPage
//               collection={selectedCard}
//               handleLikeClick={handleLikeClick}
//               isLiked={isLiked}
//             />
//           }
//           // handle={{
//           //   breadcrumb: () => ({
//           //     path: `${selectedCard?.path}`,
//           //     label: `${selectedCard?.name}`,
//           //   }),
//           // }}
//           handle={{ breadcrumb: selectedCard?.name || 'Коллекция' }}
//         />
//       </Route>
//     </Route>
//     <Route path="info">
//       <Route
//         index
//         element={<InfoCenter handleInfoCardClick={handleInfoCardClick} />}
//         handle={{ breadcrumb: 'Инфоцентр' }}
//         // handle={{
//         //   breadcrumb: () => ({ path: '/info', label: 'Инфоцентр' }),
//         // }}
//       />
//       <Route path=":subsection">
//         <Route
//           index
//           element={
//             <InfoSubsection handleInfoCardClick={handleInfoCardClick} />
//           }
//           handle={{ breadcrumb: 'Подраздел' }}
//         />
//         <Route
//           path=":content"
//           element={<InfoPage infoCard={selectedInfoCard} />}
//           handle={{ breadcrumb: selectedInfoCard?.name || 'Информация' }}
//         />
//       </Route>
//     </Route>
//     <Route
//       path="about"
//       element={<AboutUs />}
//       handle={{ breadcrumb: 'О нас' }}
//       // handle={{ breadcrumb: () => ({ path: '/about', label: 'О нас' }) }}
//     />
//     <Route
//       path="contacts"
//       element={<Contacts />}
//       handle={{ breadcrumb: 'Контакты' }}
//       // handle={{
//       //   breadcrumb: () => ({ path: '/contacts', label: 'Контакты' }),
//       // }}
//     />
//     <Route
//       path="favorites"
//       element={
//         <FavoritesPage
//           favorites={favorites}
//           url={`${fromFavoritesUrl}`}
//           handleCardClick={handleCardClick}
//           unfavoritesClick={unfavoritesClick}
//         />
//       }
//       handle={{ breadcrumb: 'Избранное' }}
//       // handle={{
//       //   breadcrumb: () => ({ path: '/favorites', label: 'Избранное' }),
//       // }}
//     />
//     <Route path="*" element={<NotFound />} />
//   </Route>
// );
