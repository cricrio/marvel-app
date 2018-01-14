import { getCharacters, getOneCharacter } from './fetchCharacters';

export const STORE_CHARACTERS = 'STORE_CHARACTERS';
export const storeCharacters = (characters) => {
	return {
		type: STORE_CHARACTERS,
		characters
	};
};

export const fetchCharacters = (pageNumber) => (dispatch) => {
	getCharacters(pageNumber)
		.then((characters) => dispatch(storeCharacters(characters)))
		.catch((err) => console.error(err));
};

export const STORE_ONE_CHARACTER = 'STORE_ONE_CHARACTER';
export const storeOneCharacter = (character) => ({
	type: STORE_ONE_CHARACTER,
	character
});

export const fetchOneCharacter = (id) => (dispatch) => {
	getOneCharacter(id)
		.then((characters) => dispatch(storeOneCharacter(characters[0])))
		.catch((err) => console.error(err));
};
