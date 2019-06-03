export const allData = data => {
	type: 'ALL_DATA';
	data;
};

export const isLoading = bool => {
	type: 'IS_LOADING';
	bool;
};

export const setError = error => {
	type: 'SET_ERROR';
	error;
};
