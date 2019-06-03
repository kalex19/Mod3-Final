const isLoadingReducer = (state = false, action) => {
	switch (action.type) {
		case 'IS_LOADING':
			return true;
		//do something with this for user to see
		default:
			return state;
	}
};

export default isLoadingReducer;
