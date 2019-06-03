import React, { Component } from 'react';

export class CardContainer extends Component {
	render() {
		return <div>Hello</div>;
	}
}

const mapStateToProps = state => {
	// Some code to connect Component to State within the Redux Store
};

const mapDispatchToProps = dispatch => {
	// Some code to connect Component to app Actions and therefore Reducers within Redux Store
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
