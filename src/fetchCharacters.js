import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com:80/v1/public/characters';

const makeQueryPararms = () => {
	const ts = Date.now();
	const { REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY } = process.env;
	const hash = md5(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

	return `ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;
};

const makeBaseUrl = (id) => `${baseURL}${id ? '/' + id : ''}?${makeQueryPararms()}`;

const charactersPerPage = 33;

const offsetAndLimitForPage = (pageNumber) => {
	const offset = pageNumber === 1 ? 0 : charactersPerPage * pageNumber + 1;
	return `&limit=${charactersPerPage}&offset=${offset}`;
};

const fetchCharacters = (url) => fetch(url).then((response) => response.json()).then((json) => json.data.results);

export const getCharacters = (pageNumber) => {
	const url = makeBaseUrl() + offsetAndLimitForPage(pageNumber);
	return fetchCharacters(url);
};

export const getOneCharacter = (id) => {
	const url = makeBaseUrl(id);
	return fetchCharacters(url);
};
