import { STORE_CHARACTERS, STORE_ONE_CHARACTER } from './actions';

const initialState = {
	characters: [],
	character: undefined
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case STORE_CHARACTERS:
			return Object.assign({}, state, { characters: action.characters });

		case STORE_ONE_CHARACTER:
			return Object.assign({}, state, { character: action.character });
		default:
			return state;
	}
};

export default reducers;
