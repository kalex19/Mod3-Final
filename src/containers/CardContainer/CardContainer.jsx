import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { allData } from '../../actions';

export class CardContainer extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			error: ''
		};
	}

	componentDidMount() {
		this.fetchData();
	}
	fetchData = () => {
		return fetch('http://localhost:3001/api/v1/presidents')
			.then(response => response.json())
			.then(results => {
				this.setState({
					data: results
				});
			})
			.catch(error => {
				this.setState({
					error: 'Error getting data'
				});
			});
	};

	handleClick = () => {
		let { data } = this.state;
		data.map(card => (
			<Card
				number={card.number}
				president={card.president}
				birth_year={card.birth_year}
				death_year={card.death_year}
				took_office={card.took_office}
				left_office={card.left_office}
				party={card.party}
			/>
		));
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Press</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { data: state.allDataReducer };
};

const mapDispatchToProps = dispatch => {
	return {
		handleData: data => {
			dispatch(allData(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
