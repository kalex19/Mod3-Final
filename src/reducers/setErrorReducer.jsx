const setErrorReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_ERROR':
			console.log(state);
		//do something with this - do not leave as console.log
		default:
			return state;
	}
};

export default setErrorReducer;
