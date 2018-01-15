import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com:80/v1/public/characters';

const makeQueryPararms = () => {
	const ts = Date.now();
	const { REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY } = process.env;
	const hash = md5(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

	return `ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;
};

const makeUrl = (id) => `${baseURL}${id ? '/' + id : ''}?${makeQueryPararms()}`;

const charactersPerPage = 33;

const offsetAndLimitForPage = (pageNumber) => {
	const offset = pageNumber === 1 ? 0 : charactersPerPage * pageNumber + 1;
	return `&limit=${charactersPerPage}&offset=${offset}`;
};

const fetchCharacters = (url) =>
	fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				const error = new Error('Error with marvel api');
				error.code = response.status;
				throw error;
			}
		})
		.then((json) => json.data.results);

export const getCharacters = (pageNumber) => {
	const url = makeUrl() + offsetAndLimitForPage(pageNumber);
	return fetchCharacters(url);
};

export const getOneCharacter = (id) => {
	const url = makeUrl(id);
	return fetchCharacters(url);
};
