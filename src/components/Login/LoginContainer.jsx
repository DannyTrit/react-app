import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/reducers/authReducer";

const mapStateToProps = (state) =>
({
	isAuth: state.auth.isAuth,
	userID: state.auth.userID
})
export default connect(mapStateToProps, {logIn})(Login)