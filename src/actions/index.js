import { getCharacters } from '../services';

export const STORE_CHARACTERS = 'STORE_CHARACTERS';
export const storeCharacters = (characters) => {
	return {
		type: STORE_CHARACTERS,
		characters
	};
};

export const fetchCharacters = () => (dispatch) => {
	getCharacters().then((characters) => dispatch(storeCharacters(characters))).catch((err) => console.error(err));
};

export const STORE_ONE_CHARACTER = 'STORE_ONE_CHARACTER';
export const storeOneCharacter = (character) => ({
	type: STORE_ONE_CHARACTER,
	character
});

export const fetchOneCharacter = (id) => (dispatch) => {
	getCharacters(id).then((character) => dispatch(storeOneCharacter(character))).catch((err) => console.error(err));
};
