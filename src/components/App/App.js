import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { useGetCards } from '../../hooks/useGetCards';
import { categorys } from '../../utils/categorys';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';
import CatalogPage from '../CatalogPage/CatalogPage';
import NotFound from '../NotFound/NotFound';
import CollectionPage from '../CollectionPage/CollectionPage';
import InfoCenter from '../InfoCenter/InfoCenter';
import InfoSubsection from '../InfoSubsection/InfoSubsection';
import InfoPage from '../InfoPage/InfoPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';
import Layout from '../Layout/Layout';

const App = () => {
  const {
    selectedInfoCard,
    handleCardClick,
    handleInfoCardClick,
    handleCatalogSectionClick,
    isLiked,
    handleLikeClick,
    fromFavoritesUrl,
    modifiedList,
    favorites,
    selectedCatalogSection,
    selectedCard,
    unfavoritesClick,
  } = useGetCards();

  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={<Layout favorites={favorites} />}
          handle={{ breadcrumb: () => 'Главная' }}
        >
          <Route
            index
            element={
              <Main
                list={modifiedList}
                handleCardClick={handleCardClick}
                handleCatalogSectionClick={handleCatalogSectionClick}
                handleInfoCardClick={handleInfoCardClick}
              />
            }
          />
          <Route path="catalog" handle={{ breadcrumb: () => 'Каталог' }}>
            <Route
              index
              element={
                <CatalogPage
                  categorys={categorys}
                  handleCatalogSectionClick={handleCatalogSectionClick}
                />
              }
            />
            <Route path=":category" handle={{ breadcrumb: () => 'Категория' }}>
              <Route
                index
                element={
                  <CatalogSectionBox
                    selectedCatalogSection={selectedCatalogSection}
                    list={modifiedList}
                    handleCardClick={handleCardClick}
                    handleCatalogSectionClick={handleCatalogSectionClick}
                  />
                }
              />
              <Route
                path=":collection"
                element={
                  <CollectionPage
                    collection={selectedCard}
                    handleLikeClick={handleLikeClick}
                    isLiked={isLiked}
                  />
                }
                handle={{ breadcrumb: () => 'Коллекция' }}
              />
            </Route>
          </Route>
          <Route path="info" handle={{ breadcrumb: () => 'Инфоцентр' }}>
            <Route
              index
              element={<InfoCenter handleInfoCardClick={handleInfoCardClick} />}
            />
            <Route
              path=":subsection"
              handle={{ breadcrumb: () => 'Инфораздел' }}
            >
              <Route
                index
                element={
                  <InfoSubsection handleInfoCardClick={handleInfoCardClick} />
                }
              />
              <Route
                path=":content"
                element={<InfoPage infoCard={selectedInfoCard} />}
                handle={{ breadcrumb: () => 'Контент' }}
              />
            </Route>
          </Route>
          <Route
            path="about"
            element={<AboutUs />}
            handle={{ breadcrumb: () => 'О нас' }}
          />
          <Route
            path="contacts"
            element={<Contacts />}
            handle={{ breadcrumb: () => 'Контакты' }}
          />
          <Route
            path="favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                url={`${fromFavoritesUrl}`}
                handleCardClick={handleCardClick}
                unfavoritesClick={unfavoritesClick}
              />
            }
            handle={{ breadcrumb: () => 'Избранное' }}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router1} basename={process.env.PUBLIC_URL} />
    </div>
  );
};

export default App;

// const router1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Layout favorites={favorites} />}
//       handle={{ breadcrumb: () => 'Главная' }}
//     >
//       <Route
//         index
//         element={
//           <Main
//             list={modifiedList}
//             handleCardClick={handleCardClick}
//             handleCatalogSectionClick={handleCatalogSectionClick}
//             handleInfoCardClick={handleInfoCardClick}
//           />
//         }
//       />
//       <Route path="catalog" handle={{ breadcrumb: () => 'Каталог' }}>
//         <Route
//           index
//           element={
//             <CatalogPage
//               categorys={categorys}
//               handleCatalogSectionClick={handleCatalogSectionClick}
//             />
//           }
//         />
//         <Route
//           path=":category"
//           loader={() => selectedCatalogSection.name}
//           handle={{ breadcrumb: (data) => data }}
//         >
//           <Route
//             index
//             element={
//               <CatalogSectionBox
//                 selectedCatalogSection={selectedCatalogSection}
//                 list={modifiedList}
//                 handleCardClick={handleCardClick}
//                 handleCatalogSectionClick={handleCatalogSectionClick}
//               />
//             }
//           />
//           <Route
//             path=":collection"
//             element={
//               <CollectionPage
//                 collection={selectedCard}
//                 handleLikeClick={handleLikeClick}
//                 isLiked={isLiked}
//               />
//             }
//             handle={{ breadcrumb: () => 'Коллекция' }}
//           />
//         </Route>
//       </Route>
//       <Route path="info" handle={{ breadcrumb: () => 'Инфоцентр' }}>
//         <Route
//           index
//           element={<InfoCenter handleInfoCardClick={handleInfoCardClick} />}
//         />
//         <Route
//           path=":subsection"
//           element={
//             <InfoSubsection handleInfoCardClick={handleInfoCardClick} />
//           }
//           handle={{ breadcrumb: () => 'Инфо раздел' }}
//         >
//           <Route
//             path=":content"
//             element={<InfoPage infoCard={selectedInfoCard} />}
//             handle={{ breadcrumb: () => 'Контент' }}
//           />
//         </Route>
//       </Route>
//       <Route
//         path="about"
//         element={<AboutUs />}
//         handle={{ breadcrumb: () => 'О нас' }}
//       />
//       <Route
//         path="contacts"
//         element={<Contacts />}
//         handle={{ breadcrumb: () => 'Контакты' }}
//       />
//       <Route
//         path="favorites"
//         element={
//           <FavoritesPage
//             favorites={favorites}
//             url={`${fromFavoritesUrl}`}
//             handleCardClick={handleCardClick}
//             unfavoritesClick={unfavoritesClick}
//           />
//         }
//         handle={{ breadcrumb: () => 'Избранное' }}
//       />
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

// const routesNew = [
//   {
//     path: '/',
//     element: <Layout favorites={favorites} />,
//     handle: { breadcrumb: () => 'Главная' },
//     children: [
//       {
//         index: true,
//         element: (
//           <Main
//             list={modifiedList}
//             handleCardClick={handleCardClick}
//             handleCatalogSectionClick={handleCatalogSectionClick}
//             handleInfoCardClick={handleInfoCardClick}
//           />
//         ),
//       },
//       {
//         path: 'catalog',
//         handle: { breadcrumb: () => 'Каталог' },
//         children: [
//           {
//             index: true,
//             element: (
//               <CatalogPage
//                 categorys={categorys}
//                 handleCatalogSectionClick={handleCatalogSectionClick}
//               />
//             ),
//           },
//           {
//             path: ':category',
//             handle: {
//               // breadcrumb: () => selectedCatalogSection.name,
//               breadcrumb: () => 'Категория',
//             },
//             children: [
//               {
//                 index: true,
//                 element: (
//                   <CatalogSectionBox
//                     selectedCatalogSection={selectedCatalogSection}
//                     list={modifiedList}
//                     handleCardClick={handleCardClick}
//                     handleCatalogSectionClick={handleCatalogSectionClick}
//                   />
//                 ),
//               },
//               {
//                 path: ':collection',
//                 handle: { breadcrumb: () => selectedCard.name },
//                 // handle: () => ({ breadcrumb: selectedCard.name }),
//                 element: (
//                   <CollectionPage
//                     collection={selectedCard}
//                     handleLikeClick={handleLikeClick}
//                     isLiked={isLiked}
//                   />
//                 ),
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: 'info',
//         handle: { breadcrumb: () => 'Инфоцентр' },
//         children: [
//           {
//             index: true,
//             element: <InfoCenter handleInfoCardClick={handleInfoCardClick} />,
//           },
//           {
//             path: ':subsection',
//             element: (
//               <InfoSubsection handleInfoCardClick={handleInfoCardClick} />
//             ),
//             children: [
//               {
//                 path: ':content',
//                 element: <InfoPage infoCard={selectedInfoCard} />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: 'about',
//         element: <AboutUs />,
//         handle: { breadcrumb: () => 'О нас' },
//       },
//       {
//         path: 'contacts',
//         element: <Contacts />,
//         handle: { breadcrumb: () => 'Контакты' },
//       },
//       {
//         path: 'favorites',
//         handle: { breadcrumb: () => 'Избранное' },
//         element: (
//           <FavoritesPage
//             favorites={favorites}
//             url={`${fromFavoritesUrl}`}
//             handleCardClick={handleCardClick}
//             unfavoritesClick={unfavoritesClick}
//           />
//         ),
//       },
//       { path: '*', element: <NotFound /> },
//     ],
//   },
// ];

// const router = createBrowserRouter(routesNew);
