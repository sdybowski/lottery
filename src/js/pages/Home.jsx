import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { ROUTES } from '../app/routing';
import { Gambler } from '../components/Gambler';

const HomeComponent = ({ goToTest }) => <div>
	<h1>Home</h1>
	<button onClick={goToTest}>Go to Test</button>
	<hr />
	<Gambler />
</div>;

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	goToTest: () => dispatch(push(ROUTES.TEST.PATH)),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);