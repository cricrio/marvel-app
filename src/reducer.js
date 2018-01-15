import {
	STORE_CHARACTERS,
	STORE_ONE_CHARACTER,
	LOADING,
	INCREMENT_NEXT_PAGE,
	ERROR_DETAILS,
	ERROR_LIST
} from './actions';

const initialState = {
	nextPage: 1,
	characters: [],
	character: null,
	loading: false,
	errorDetails: null,
	errorList: null
};

const storeCharacters = (state, newCharacters) => {
	const characters = [ ...state.characters, ...newCharacters ];
	return Object.assign({}, state, { characters }, { loading: false });
};

const setLoadingState = (state) =>
	Object.assign({}, state, { loading: true }, { errorDetails: null }, { errorList: null });

const setErrorState = (state, action) => {
	//remove loading state
	const tempState = Object.assign({}, state, { loading: false });
	switch (action.type) {
		case ERROR_DETAILS:
			return Object.assign({}, tempState, { errorDetails: action.code });
		case ERROR_LIST:
			return Object.assign({}, tempState, { errorList: action.code });
		default:
			return tempState;
	}
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_NEXT_PAGE:
			return Object.assign({}, state, { nextPage: state.nextPage + 1 });
		case LOADING:
			return setLoadingState(state);
		case STORE_CHARACTERS:
			return storeCharacters(state, action.characters);
		case STORE_ONE_CHARACTER:
			return Object.assign({}, state, { character: action.character }, { loading: false });
		case ERROR_DETAILS:
			return setErrorState(state, action);
		case ERROR_LIST:
			return setErrorState(state, action);
		default:
			return state;
	}
};

export default reducers;
