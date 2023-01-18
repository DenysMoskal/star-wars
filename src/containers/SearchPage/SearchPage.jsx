import React, { useCallback } from 'react';
import styles from './SerachPage.module.css';
import { debounce } from 'lodash';

import SearchPageInfo from '@components/SearchPage/SearchPageInfo/SearchPageInfo';
import UIInput from '@UI/UIInput/UIInput';

import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constatns/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

const SearchPage = ({ setErrorApi }) => {
  const [people, setPeople] = React.useState([]);
  const [text, setText] = React.useState('');

  const getResponse = async (params) => {
    const res = await getApiResource(API_SEARCH + params);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          img,
          name,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResponse('');
  }, []);

  const getResponseDebaunce = useCallback(
    debounce((value) => getResponse(value), 300),
    [],
  );

  const HandleText = (value) => {
    setText(value);
    getResponseDebaunce(value);
  };

  return (
    <>
      <h1 className="header__text">SearchPage</h1>
      <UIInput
        value={text}
        HandleText={HandleText}
        placeholder="Search person"
        classes={styles.input__search}
        setText={setText}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);
