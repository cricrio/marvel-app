import { getCharacters } from '../services';

export const STORE_CHARACTERS = 'STORE_CHARACTERS';
export const storeCharacters = (characters) => {
	return {
		type: STORE_CHARACTERS,
		characters
	};
};
export const STORE_CHARACTER = 'STORE_CHARACTER';
export const storeCharacter = (character) => ({
	type: STORE_CHARACTER,
	character
});

export const fetchCharacters = () => (dispatch) => {
	getCharacters().then((characters) => dispatch(storeCharacters(characters))).catch((err) => console.error(err));
};
