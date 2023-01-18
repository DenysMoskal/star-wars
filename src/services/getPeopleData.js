import {
  HTTPS,
  HTTP,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  GUIDE_IMG_EXTENSHION,
  URL_IMG_PERSON,
  SWAPI_PARAM_PAGE,
} from '@constatns/api';

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length);
  return Number(id);
};

const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url
    .replace(protocol + SWAPI_ROOT + category, '')
    .replace(/\//g, '');
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

const checkProtocol = (url) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }
  return HTTP;
};

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSHION}`;
