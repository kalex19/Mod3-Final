const allDataReducer = (state = [], action) => {
	switch (action.type) {
		case 'ALL_DATA':
			return state.push(action.data);
		default:
			return state;
	}
};

export default allDataReducer;
