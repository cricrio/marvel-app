import { STORE_CHARACTERS } from '../actions';

const initialState = {
	characters: []
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case STORE_CHARACTERS:
			console.log(Object.assign({}, state, { characters: action.characters }));
			return Object.assign({}, state, { characters: action.characters });
		default:
			return state;
	}
};

export default reducers;
