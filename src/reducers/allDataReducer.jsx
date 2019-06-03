export const data = (state = [], action) => {
	switch (action.type) {
		case 'ALL_DATA':
			return state.push(data);
		default:
			return state;
	}
};
