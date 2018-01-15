import { getCharacters, getOneCharacter } from './fetchCharacters';

export const LOADING = 'LOADING';
const setLoadingState = () => ({ type: LOADING });

export const ERROR_LIST = 'ERROR_LIST';
export const setErrorList = (code) => ({ type: ERROR_LIST, code });

export const ERROR_DETAILS = 'ERROR_DETAILS';
export const setErrorDetail = (code) => ({ type: ERROR_DETAILS, code });

export const INCREMENT_NEXT_PAGE = 'INCREMENT_NEXT_PAGE';
export const incrementNextPage = () => ({ type: INCREMENT_NEXT_PAGE });

export const STORE_CHARACTERS = 'STORE_CHARACTERS';

export const storeCharacters = (characters) => {
	return {
		type: STORE_CHARACTERS,
		characters
	};
};

export const fetchCharacters = (pageNumber) => (dispatch) => {
	getCharacters(pageNumber).then((characters) => dispatch(storeCharacters(characters))).catch((error) => {
		console.error(error);
		dispatch(setErrorList(error.code));
	});
	dispatch(setLoadingState());
	dispatch(incrementNextPage());
};

export const STORE_ONE_CHARACTER = 'STORE_ONE_CHARACTER';
export const storeOneCharacter = (character) => ({
	type: STORE_ONE_CHARACTER,
	character
});

export const fetchOneCharacter = (id) => (dispatch) => {
	getOneCharacter(id).then((characters) => dispatch(storeOneCharacter(characters[0]))).catch((error) => {
		console.error(error);
		dispatch(setErrorDetail(error.code));
	});
	dispatch(setLoadingState());
};
