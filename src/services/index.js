import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com:80/v1/public/characters';

const getQueryPararms = () => {
	const ts = Date.now();
	const {
		REACT_APP_PUBLIC_KEY,
		REACT_APP_PRIVATE_KEY
	} = process.env;
	const hash = md5(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

	return `ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;
};

const getUrl = (id) => (id ? `${baseURL}/${id}?${getQueryPararms()}` : `${baseURL}?${getQueryPararms()}`);

export const getCharacters = (id) =>
	fetch(getUrl(id))
	.then((response) => response.json())
	.then((json) => json.data.results);