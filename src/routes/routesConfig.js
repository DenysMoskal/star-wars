import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage';
import FavoritePage from '@containers/FavoritePage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/people',
    element: <PeoplePage />,
  },
  {
    path: '/people/:id',
    element: <PersonPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/fail',
    element: <ErrorMessage />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: '/favorite',
    element: <FavoritePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routesConfig;
