import { STORE_CHARACTERS } from '../actions';

const reducers = (state, action) => {
	switch (action.type) {
		case STORE_CHARACTERS:
			return Object.assign({}, state, { characters: action.characters });
		default:
			return state;
	}
};

export default reducers;
