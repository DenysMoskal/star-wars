import { HTTP, HTTPS } from '@constatns/api';
/**
 * Міняє URL з HTTP, HTTPS
 *@param {Sting}
 */
export const changeHTTP = (url) => {
  const resault = url ? url.replace(HTTP, HTTPS) : url;
  return resault;
};

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch -', res.status);
      return false;
    }

    return await res.json();
  } catch (err) {
    console.error('Could not fetch -', err.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    }),
  );
  return res;
};

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
