import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { ROUTES } from '../app/routing';

const TestComponent = ({ goToHome }) => <div>
	<h1>Test</h1>
	<button onClick={goToHome}>Go to Home</button>
</div>;

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
	goToHome: () => dispatch(push(ROUTES.HOME.PATH)),
});

export const Test = connect(mapStateToProps, mapDispatchToProps)(TestComponent);