import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { API_PERSON } from '@constatns/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonImage from '@components/PersonPage/PersonImage';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UILoading from '@UI/UILoading';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms'),
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = React.useState(null);
  const [personInfo, setPersonInfo] = React.useState(null);
  const [personName, setPersonName] = React.useState(null);
  const [personImage, setPersonImage] = React.useState(null);
  const [personFilms, setPersonFilms] = React.useState(null);
  const [personFavorite, setPersonFavorite] = React.useState(false);

  const storeData = useSelector((state) => state.favorite.favorite);

  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair', data: res.hair_color },
          { title: 'Skin', data: res.skin_color },
          { title: 'Eye', data: res.eye_color },
          { title: 'Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);

        setPersonId(id);
        setPersonImage(getPeopleImage(id));
        setPersonName(res.name);
        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage
            personImage={personImage}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
