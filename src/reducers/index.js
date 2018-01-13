import { STORE_CHARACTERS, STORE_ONE_CHARACTER } from '../actions';

const initialState = {
	characters: [],
	character: undefined
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case STORE_CHARACTERS:
			console.log(Object.assign({}, state, { characters: action.characters }));
			return Object.assign({}, state, { characters: action.characters });

		case STORE_ONE_CHARACTER:
			console.log(state, action.character);
			return Object.assign({}, state, { character: action.character });
		default:
			return state;
	}
};

export default reducers;
