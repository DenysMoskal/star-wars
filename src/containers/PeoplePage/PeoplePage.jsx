import React from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';

import { getApiResource, changeHTTP } from '@utils/network';
import { API_PEOPLE } from '@constatns/api';
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';

import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigate from '@components/PeopleNavigate';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = React.useState(null);
  const [prevPage, setPrevPage] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(null);
  const [counterPage, setCounterPage] = React.useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    (async () => {
      const res = await getApiResource(url);

      if (res) {
        const peopleList = res.results.map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id);

          return {
            id,
            name,
            img,
          };
        });
        setPeople(peopleList);
        setPrevPage(changeHTTP(res.previous));
        setNextPage(changeHTTP(res.next));
        setCounterPage(getPeoplePageId(url));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  };

  React.useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigate
        getResource={getResource}
        counterPage={counterPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
